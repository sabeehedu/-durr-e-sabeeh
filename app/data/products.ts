// Single source of truth for seed varieties shown across the site.
// Add a new variety here and it automatically appears on the relevant
// crop page — no other file needs to change.

export interface SeedVariety {
  slug: string
  name: string
  crop: 'wheat' | 'rice' | 'other'
  tagline: string
  description: string
  traits: string[]
  packSizes: string[]
}

export const seedVarieties: SeedVariety[] = [
  {
    slug: 'arooj-2022',
    name: 'Arooj-2022',
    crop: 'wheat',
    tagline: 'High-yield wheat bred for central Punjab conditions',
    description:
      'A certified wheat variety selected for strong tillering, good standability and consistent performance across irrigated Punjab plains.',
    traits: ['Certified seed class', 'Rust tolerant', 'Suited to timely sowing'],
    packSizes: ['50 KG', '40 KG']
  },
  {
    slug: 'punjab-basmati-1',
    name: 'Punjab Basmati-1',
    crop: 'rice',
    tagline: 'Aromatic long-grain basmati for export-quality yield',
    description:
      'A classic basmati selection prized for grain length and aroma, tested across multiple seasons for stable field performance.',
    traits: ['Certified seed class', 'Long slender grain', 'Strong aroma retention'],
    packSizes: ['20 KG', '10 KG']
  },
  {
    slug: 'super-basmati',
    name: 'Super Basmati',
    crop: 'rice',
    tagline: 'A widely grown non-basmati alternative for high output',
    description:
      'Selected for growers who prioritize per-acre yield alongside acceptable grain and cooking quality.',
    traits: ['Certified seed class', 'High tillering', 'Good milling recovery'],
    packSizes: ['25 KG']
  }
]

export function getVarietiesByCrop(crop: SeedVariety['crop']) {
  return seedVarieties.filter((v) => v.crop === crop)
}

export function getVarietyBySlug(slug: string) {
  return seedVarieties.find((v) => v.slug === slug)
}
