export interface SiteConfig {
  fullName: string
  tagline: string
  email: string
  location: string
  githubUser: string
  repoName: string
  useCustomDomain: boolean
  customDomain?: string
  enableWebLLM: boolean
  theme: {
    primary: string
    secondary: string
    fontSans: string
    fontMono: string
    vibe: 'ultra-minimal'
  }
}

export const siteConfig: SiteConfig = {
  fullName: 'Tarun Aditya',
  tagline: 'AI Engineer — LLMs, RAG, Agents',
  email: 'you@example.com',
  location: 'Dayton, OH, USA',
  githubUser: 't7r0n',
  repoName: 'ai-portfolio',
  useCustomDomain: false,
  customDomain: '',
  enableWebLLM: false,
  theme: {
    primary: '#22d3ee',
    secondary: '#a78bfa',
    fontSans: 'Inter',
    fontMono: 'JetBrains Mono',
    vibe: 'ultra-minimal',
  },
}
