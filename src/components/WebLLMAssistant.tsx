import React, { useEffect, useMemo, useState } from 'react'

export default function WebLLMAssistant() {
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [unsupported, setUnsupported] = useState(false)
  const [history, setHistory] = useState<Array<{ role: 'user'|'assistant'; content: string }>>([])
  const [input, setInput] = useState('')
  const [engine, setEngine] = useState<any>(null)

  useEffect(() => {
    if (!open) return
    const hasWebGPU = 'gpu' in navigator
    if (!hasWebGPU) {
      setUnsupported(true)
      return
    }
    let cancelled = false
    ;(async () => {
      const { CreateMLCEngine } = await import('@mlc-ai/web-llm')
      const model = 'Llama-3-8B-Instruct-q4f16_1-MLC'
      const e = await CreateMLCEngine(model, { gpuMemoryUtilization: 0.7 }).catch(() => null)
      if (cancelled) return
      if (!e) { setUnsupported(true); return }
      setEngine(e)
      setReady(true)
    })()
    return () => { cancelled = true }
  }, [open])

  async function send() {
    const q = input.trim()
    if (!q) return
    setHistory(h => [...h, { role: 'user', content: q }])
    setInput('')
    if (!engine) return
    let answer = ''
    for await (const out of engine.chat.completions.create({ messages: [...history, { role: 'user', content: q }], stream: true })) {
      if (out.choices?.[0]?.delta?.content) {
        answer += out.choices[0].delta.content
        setHistory(h => {
          const copy = [...h]
          // ensure last assistant message exists
          if (copy.at(-1)?.role !== 'assistant') copy.push({ role: 'assistant', content: '' })
          copy[copy.length - 1] = { role: 'assistant', content: answer }
          return copy
        })
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={() => setOpen(o => !o)} className="rounded-full bg-primary text-black dark:text-white px-4 py-2 shadow-soft">{open ? 'Close' : 'Assistant'}</button>
      {open && (
        <div className="mt-2 w-80 h-96 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-3 flex flex-col">
          {!ready && !unsupported && <p className="text-sm">Loading model…</p>}
          {unsupported && <p className="text-sm">WebGPU not supported. Use a Chromium-based browser on a GPU-enabled device.</p>}
          <div className="flex-1 overflow-auto space-y-2 text-sm">
            {history.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
                <span className={m.role === 'user' ? 'inline-block bg-primary/10 text-primary px-2 py-1 rounded-lg' : 'inline-block bg-black/5 dark:bg-white/10 px-2 py-1 rounded-lg'}>
                  {m.content}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={ready ? 'Ask something…' : 'Loading…'} disabled={!ready} className="flex-1 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-2 py-1" />
            <button onClick={send} disabled={!ready} className="rounded-md border border-black/10 dark:border-white/10 px-3 py-1">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
