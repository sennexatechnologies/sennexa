import { useRef } from 'react'
import { useReducedMotion } from '../lib/hooks'

// Sennexa "Revenue Network": five connected capabilities feeding one business core.
// Pure SVG + CSS. Decorative (aria-hidden); the legend below carries the meaning in text.
const CX = 280
const CY = 280
const R = 172

const nodes = [
  { label: 'INFRASTRUCTURE', angle: -90 },
  { label: 'ACQUISITION', angle: -18 },
  { label: 'EXPERIENCE', angle: 54 },
  { label: 'AUTOMATION', angle: 126 },
  { label: 'PERFORMANCE', angle: 198 },
].map((n) => {
  const a = (n.angle * Math.PI) / 180
  return { ...n, x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), cos: Math.cos(a) }
})

const spokes = nodes.map((n) => {
  // Slight curve so the spokes feel flowing rather than mechanical.
  const mx = (n.x + CX) / 2 + (n.y - CY) * 0.12
  const my = (n.y + CY) / 2 - (n.x - CX) * 0.12
  return `M ${n.x.toFixed(1)} ${n.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${CX} ${CY}`
})

const ring = nodes.map((n, i) => {
  const m = nodes[(i + 1) % nodes.length]
  const cx = CX + ((n.x + m.x) / 2 - CX) * 0.72
  const cy = CY + ((n.y + m.y) / 2 - CY) * 0.72
  return `M ${n.x.toFixed(1)} ${n.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${m.x.toFixed(1)} ${m.y.toFixed(1)}`
})

export const networkLegend = [
  ['Infrastructure', 'Sites and platforms that stay fast and reliable'],
  ['Acquisition', 'Search and campaigns that bring customers in'],
  ['Experience', 'Design that builds trust and removes friction'],
  ['Automation', 'Connected systems that remove manual work'],
  ['Performance', 'Measurement tied to enquiries, not vanity metrics'],
]

export default function RevenueNetwork({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion()
  const tiltRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !tiltRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    tiltRef.current.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`
  }
  const onLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = ''
  }

  return (
    <div className={`relative ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="glow-blue pointer-events-none absolute inset-[-12%]" aria-hidden="true" />
      <div
        ref={tiltRef}
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d] motion-reduce:transition-none"
      >
        <svg
          viewBox="0 0 560 560"
          className="net-fade relative block h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="net-spoke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#AEB8C6" stopOpacity="0.35" />
              <stop offset="1" stopColor="#267BFF" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="net-core">
              <stop offset="0" stopColor="#267BFF" stopOpacity="0.55" />
              <stop offset="1" stopColor="#267BFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className={reduced ? '' : 'net-spin'} fill="none" stroke="#AEB8C6" strokeOpacity="0.16">
            <circle cx={CX} cy={CY} r="250" strokeDasharray="2 10" />
          </g>
          <g className={reduced ? '' : 'net-spin-rev'} fill="none" stroke="#AEB8C6" strokeOpacity="0.2">
            <circle cx={CX} cy={CY} r="118" strokeDasharray="1 7" />
          </g>
          <circle cx={CX} cy={CY} r="172" fill="none" stroke="#AEB8C6" strokeOpacity="0.08" />

          {ring.map((d, i) => (
            <path
              key={`r${i}`}
              d={d}
              id={`ring-${i}`}
              fill="none"
              stroke="#AEB8C6"
              strokeOpacity="0.28"
              strokeWidth="1"
              className={reduced ? '' : 'net-line'}
              style={reduced ? undefined : { animationDelay: `${0.4 + i * 0.12}s` }}
            />
          ))}

          {spokes.map((d, i) => (
            <path
              key={`s${i}`}
              d={d}
              id={`spoke-${i}`}
              fill="none"
              stroke="url(#net-spoke)"
              strokeWidth="1.5"
              className={reduced ? '' : 'net-line'}
              style={reduced ? undefined : { animationDelay: `${0.7 + i * 0.12}s` }}
            />
          ))}

          {!reduced &&
            spokes.map((_, i) => (
              <circle key={`p${i}`} r="3" fill="#8DBAFF">
                <animateMotion dur={`${4 + i * 0.7}s`} begin={`${2.2 + i * 0.5}s`} repeatCount="indefinite">
                  <mpath href={`#spoke-${i}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${4 + i * 0.7}s`}
                  begin={`${2.2 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

          <circle cx={CX} cy={CY} r="70" fill="url(#net-core)" />
          <circle cx={CX} cy={CY} r="30" fill="#0C1422" stroke="#267BFF" strokeOpacity="0.8" />
          <circle cx={CX} cy={CY} r="42" fill="none" stroke="#267BFF" strokeOpacity="0.25" />
          <circle cx={CX} cy={CY} r="7" fill="#267BFF" />
          <text
            x={CX}
            y={CY + 66}
            textAnchor="middle"
            fill="#9CA9BD"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="2"
          >
            YOUR BUSINESS
          </text>

          {nodes.map((n, i) => {
            const top = i === 0
            const anchor = top ? 'middle' : n.cos > 0 ? 'start' : 'end'
            const tx = top ? n.x : n.x + (n.cos > 0 ? 22 : -22)
            const ty = top ? n.y - 26 : n.y + 4
            return (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="16" fill="#267BFF" fillOpacity="0.1" />
                <circle cx={n.x} cy={n.y} r="7" fill="#050608" stroke="#267BFF" strokeWidth="1.75" />
                <text
                  x={tx}
                  y={ty}
                  textAnchor={anchor}
                  fill="#C5CEDB"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                  letterSpacing="1.5"
                >
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
