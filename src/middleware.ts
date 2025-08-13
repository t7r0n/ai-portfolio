import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  // Simple security headers
  context.response.headers.set('X-Content-Type-Options', 'nosniff')
  context.response.headers.set('X-Frame-Options', 'DENY')
  return next()
})
