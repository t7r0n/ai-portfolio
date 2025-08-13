import type { AstroIntegration } from 'astro'

// No-op placeholder for future OG image pipeline or accessibility checks
export default function noop(): AstroIntegration {
  return {
    name: 'noop',
    hooks: {},
  }
}
