import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    date: z.string(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
})

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
  }),
})

const certifications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    org: z.string(),
    issued: z.string(),
    expires: z.string().optional(),
    url: z.string().url().optional(),
  }),
})

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    org: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string(),
    bullets: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
  }),
})

const awards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    org: z.string(),
    year: z.number(),
    description: z.string().optional(),
  }),
})

const extras = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
})

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
})

export const collections = { projects, publications, certifications, experience, awards, extras, posts }
