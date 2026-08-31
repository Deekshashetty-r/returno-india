import Link from 'next/link'

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
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
          stroke="#F8F9F9"
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
      <span className="font-display font-bold text-[#F8F9F9] text-lg tracking-tight leading-none">
        VYOM
        {!compact && (
          <span className="font-body font-medium text-sm tracking-wide text-[#F8F9F9]/80 ml-1.5">
            Studio
          </span>
        )}
      </span>
    </Link>
  )
}
