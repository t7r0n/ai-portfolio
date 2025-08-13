#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const type = process.argv[2]
const map = {
  project: 'projects',
  publication: 'publications',
  certification: 'certifications',
  experience: 'experience',
  award: 'awards',
  extra: 'extras',
  post: 'posts',
}

if (!map[type]) {
  console.error(`Unknown type: ${type}. Use one of ${Object.keys(map).join(', ')}`)
  process.exit(1)
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const title = await rl.question('Title: ')
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const dir = path.join(root, 'src', 'content', map[type])
fs.mkdirSync(dir, { recursive: true })

let frontmatter = `---\n`
frontmatter += `title: ${title}\n`
if (type === 'project') frontmatter += `summary: ...\ntech: []\nfeatured: false\n`
if (type === 'publication') frontmatter += `venue: ...\nyear: 2025\nauthors: []\n`
if (type === 'certification') frontmatter += `org: ...\nissued: 2025-01-01\n`
if (type === 'experience') frontmatter += `org: ...\nstart: 2025-01-01\nlocation: ...\nbullets: []\n`
if (type === 'award') frontmatter += `org: ...\nyear: 2025\n`
if (type === 'extra') frontmatter += `summary: ...\n`
if (type === 'post') frontmatter += `date: 2025-01-01\nsummary: ...\n`
frontmatter += `---\n\n`

fs.writeFileSync(path.join(dir, `${slug}.md`), frontmatter)
console.log(`Created ${map[type]}/${slug}.md`)
rl.close()
