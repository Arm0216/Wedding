const base = import.meta.env.BASE_URL

export const coupleData = {
  bride: 'Arman',
  groom: 'Nelly',
  date: '2026-08-01T17:00:00',
  displayDate: 'August 1, 2026',
  venue: 'Granada Hall',
  location: 'Hrazdan, Armenia',
  tagline: 'Two souls, one love story.',
  heroImage: `${base}images/photo5-together.jpg`,
}

export const galleryImages = [
  { src: `${base}images/photo1-ring.jpg`,        alt: 'Proposal ring on the mountain' },
  { src: `${base}images/photo2-couple-pink.jpg`, alt: 'Arman & Nelly at the ceremony arch', position: 'top' },
  { src: `${base}images/photo3-ring-ceremony.jpg`, alt: 'Ring exchange ceremony' },
  { src: `${base}images/photo4-cake.jpg`,        alt: 'Cutting the A&N cake' },
  { src: `${base}images/photo6-rings.jpg`,       alt: 'Wedding rings' },
]
