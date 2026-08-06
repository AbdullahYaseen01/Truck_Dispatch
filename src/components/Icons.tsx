type IconProps = { className?: string };

export function IconDispatch({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7h13v10H3V7Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 10h3.2L21 13v4h-5v-7Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7" cy="18" r="1.6" fill="currentColor" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 4.5 2.8 7.8 7 9 4.2-1.2 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCash({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 9v6M17 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconDocs({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 3v4h4M10 12h5M10 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconRoute({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 7c4 0 4 4 8 4s4 4 4 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClock({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
