import { useState } from 'react'
import { galleryImages } from '../data/weddingData'
import { useLang } from '../context/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function LightBox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl leading-none transition-colors"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

// 3 cols × 3 rows explicit placement
// [ 0 large ] [ 1 ]
// [ 0 large ] [ 2 ]
// [ 3 ] [ 4 wide  ]
const placements: React.CSSProperties[] = [
  { gridColumn: '1 / 3', gridRow: '1 / 3' },
  { gridColumn: '3 / 4', gridRow: '1 / 2' },
  { gridColumn: '3 / 4', gridRow: '2 / 3' },
  { gridColumn: '1 / 2', gridRow: '3 / 4' },
  { gridColumn: '2 / 4', gridRow: '3 / 4' },
]

function GalleryItem({
  img,
  placement,
  delay,
  onClick,
}: {
  img: { src: string; alt: string; position?: string }
  placement: React.CSSProperties
  delay: number
  onClick: () => void
}) {
  const { ref, visible } = useScrollAnimation(0.05)

  return (
    <div
      ref={ref}
      style={{ ...placement, transitionDelay: `${delay}ms` }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-1000 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.alt}
        style={{ objectPosition: img.position ?? 'center' }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { ref, visible } = useScrollAnimation()
  const { t } = useLang()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-3">{t.gallery.label}</p>
          <h2 className="font-script text-5xl sm:text-6xl text-gold-dark mb-4">{t.gallery.title}</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <svg className="w-3 h-3 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </div>

        {/* Desktop grid */}
        <div
          className="hidden sm:grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '220px 220px 220px',
          }}
        >
          {galleryImages.map((img, i) => (
            <GalleryItem
              key={img.src}
              img={img}
              placement={placements[i]}
              delay={i * 100}
              onClick={() => setLightbox(img)}
            />
          ))}
        </div>

        {/* Mobile grid — simple 2-col */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 ? 'col-span-2 h-64' : 'h-48'
              }`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ objectPosition: img.position ?? 'center' }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <LightBox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
