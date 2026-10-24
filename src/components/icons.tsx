type P = { className?: string }
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const Plus = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)
export const Check = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)
export const Cross = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)
export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
)
export const Chat = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z" />
  </svg>
)
export const Alert = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4l9 16H3L12 4zM12 10v4M12 17.5v.01" />
  </svg>
)
