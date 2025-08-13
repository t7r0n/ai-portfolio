import type { APIRoute } from 'astro'

export const prerender = true

export const GET: APIRoute = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0ea5e9"/>
        <stop offset="100%" stop-color="#a78bfa"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#0b1220"/>
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="url(#g)" opacity="0.14"/>
    <text x="80" y="200" font-family="Inter, sans-serif" font-size="72" fill="#e5faff" font-weight="700">Tarun Aditya</text>
    <text x="80" y="280" font-family="Inter, sans-serif" font-size="36" fill="#dbeafe">AI Engineer — LLMs, RAG, Agents</text>
    <text x="80" y="360" font-family="Inter, sans-serif" font-size="24" fill="#cbd5e1">t7r0n • ai-portfolio</text>
  </svg>`

  return new Response(body, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
