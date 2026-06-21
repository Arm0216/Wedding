import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LanguageContext'

const YOUTUBE_VIDEO_ID = '2Vv-BfVoq4g'

declare global {
  interface Window {
    YT: {
      Player: new (
        id: string,
        opts: {
          videoId: string
          playerVars?: Record<string, number | string>
          events?: {
            onReady?: (e: { target: { playVideo: () => void; pauseVideo: () => void; getPlayerState: () => number } }) => void
            onStateChange?: (e: { data: number }) => void
            onError?: () => void
          }
        }
      ) => {
        playVideo: () => void
        pauseVideo: () => void
        getPlayerState: () => number
        destroy: () => void
      }
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export default function MusicPlayer() {
  const { t } = useLang()
  const m = t.music
  const playerRef = useRef<ReturnType<typeof window.YT.Player> | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: { autoplay: 1, loop: 1, playlist: YOUTUBE_VIDEO_ID, controls: 0, mute: 0, enablejsapi: 1 },
        events: {
          onReady: (e) => {
            setIsReady(true)
            try {
              e.target.playVideo()
              setTimeout(() => {
                const state = e.target.getPlayerState()
                if (state !== window.YT.PlayerState.PLAYING) setShowPrompt(true)
                else setIsPlaying(true)
              }, 800)
            } catch { setShowPrompt(true) }
          },
          onStateChange: (e) => {
            setIsPlaying(e.data === window.YT.PlayerState.PLAYING)
            if (e.data === window.YT.PlayerState.PLAYING) setShowPrompt(false)
          },
          onError: () => setShowPrompt(true),
        },
      })
    }
    return () => { clearTimeout(timer); playerRef.current?.destroy() }
  }, [])

  const toggle = () => {
    if (!playerRef.current) return
    isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo()
  }

  return (
    <>
      <div className="fixed w-0 h-0 overflow-hidden pointer-events-none" aria-hidden>
        <div id="yt-player" />
      </div>

      {/* Autoplay prompt */}
      {showPrompt && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl text-center max-w-sm mx-6 border border-gold/20">
            <div className="text-5xl mb-4 animate-float">🎵</div>
            <h3 className="font-script text-3xl text-gold-dark mb-2">{m.title}</h3>
            <p className="font-sans text-sm text-muted mb-6 leading-relaxed">{m.body}</p>
            <button
              onClick={() => { playerRef.current?.playVideo(); setShowPrompt(false) }}
              className="bg-gold-gradient text-white font-sans text-sm tracking-widest uppercase px-8 py-3 rounded-xl shadow-gold hover:scale-105 transition-transform duration-300"
            >
              {m.play}
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="block mx-auto mt-4 font-sans text-xs tracking-widest uppercase text-muted/60 hover:text-muted transition-colors"
            >
              {m.skip}
            </button>
          </div>
        </div>
      )}

      {/* Floating controls */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-glass flex items-center gap-1">
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-6 px-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-0.5 bg-gold rounded-full animate-shimmer"
                  style={{ height: `${10 + i * 4}px`, animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          )}
          <button
            onClick={toggle}
            disabled={!isReady}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-50"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <div className="pr-2">
            <p className="font-sans text-[10px] text-white/80 leading-none">{m.label}</p>
            <p className="font-sans text-[9px] text-white/50 leading-none mt-0.5">
              {isPlaying ? m.playing : m.paused}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
