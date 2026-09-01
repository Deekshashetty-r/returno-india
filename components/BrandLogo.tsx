import Link from 'next/link'

export default function BrandLogo({ compact = false, theme = 'dark' }: { compact?: boolean, theme?: 'light' | 'dark' }) {
  const isLight = theme === 'light';
  const textColor = isLight ? '#111827' : '#F8F9F9';
  
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M5 5 L16 27 L21 16"
          fill="none"
          stroke={textColor}
          strokeWidth="2.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M16 27 L27 5"
          fill="none"
          stroke="#0084FF"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="26" cy="7" r="2.4" fill="#0084FF" />
      </svg>
      <span className={`font-display font-bold text-lg tracking-tight leading-none ${isLight ? 'text-gray-900' : 'text-[#F8F9F9]'}`}>
        VYOM
        {!compact && (
          <span className={`font-body font-medium text-sm tracking-wide ml-1.5 ${isLight ? 'text-gray-600' : 'text-[#F8F9F9]/80'}`}>
            Studio
          </span>
        )}
      </span>
    </Link>
  )
}
