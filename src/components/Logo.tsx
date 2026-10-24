// The supplied Sennexa logo is used exactly as provided. This component only crops regions
// of the original image file (nothing is redrawn). The image sits on near-black, so
// mix-blend-mode: lighten lets it merge into dark surfaces. Use on dark backgrounds only.
const SRC = '/brand/sennexa-logo.png'
const W = 1376
const H = 768

const CROPS = {
  mark: { x: 520, y: 100, w: 350, h: 420 },
  wordmark: { x: 440, y: 546, w: 500, h: 126 },
  lockup: { x: 440, y: 100, w: 500, h: 575 },
} as const

export default function Logo({
  variant = 'wordmark',
  className = 'w-44',
}: {
  variant?: keyof typeof CROPS
  className?: string
}) {
  const { x, y, w, h } = CROPS[variant]
  return (
    <span
      role="img"
      aria-label="Sennexa Technologies"
      className={`block shrink-0 ${className}`}
      style={{
        aspectRatio: `${w} / ${h}`,
        backgroundImage: `url(${SRC})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${(W / w) * 100}% auto`,
        backgroundPosition: `${(x / (W - w)) * 100}% ${(y / (H - h)) * 100}%`,
        mixBlendMode: 'lighten',
      }}
    />
  )
}
