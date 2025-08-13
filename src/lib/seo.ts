export interface JSONLD {
  '@context': 'https://schema.org'
  '@type': string
  [k: string]: any
}

export const personJsonLd = (opts: { name: string; jobTitle: string; email?: string; sameAs?: string[] }): JSONLD => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: opts.name,
  jobTitle: opts.jobTitle,
  email: opts.email,
  sameAs: opts.sameAs ?? [],
})

export const projectJsonLd = (opts: { name: string; description: string; url?: string; codeRepository?: string; programmingLanguage?: string[] }): JSONLD => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: opts.name,
  description: opts.description,
  url: opts.url,
  codeRepository: opts.codeRepository,
  programmingLanguage: (opts.programmingLanguage ?? []).join(', '),
})
