export type Episode = {
  number: number
  title: string
  guests?: string
  date: string // ISO yyyy-mm-dd
  url: string
}

// Newest first.
export const episodes: Episode[] = []

export const feeds = [
  { label: 'RSS', href: '#' },
  { label: 'Apple Podcasts', href: '#' },
  { label: 'Spotify', href: '#' },
  { label: 'YouTube', href: '#' },
]
