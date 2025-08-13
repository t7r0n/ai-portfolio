import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

const GH_USER = 't7r0n'
const REPO_NAME = 'ai-portfolio'

export default defineConfig({
  site: `https://${GH_USER}.github.io/${REPO_NAME}/`,
  base: `/${REPO_NAME}/`,
  integrations: [tailwind({ applyBaseStyles: false }), react(), mdx(), sitemap()],
  prefetch: true,
})
