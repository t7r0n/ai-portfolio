import type { CollectionEntry } from 'astro:content'

export function byDateDesc<T extends { data: { date?: string } }>(a: T, b: T) {
  return (b.data.date || '').localeCompare(a.data.date || '')
}

export function byYearDesc<T extends { data: { year?: number } }>(a: T, b: T) {
  return (b.data.year || 0) - (a.data.year || 0)
}
