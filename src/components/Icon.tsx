const P: Record<string, string> = {
  book: 'M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5v-15Z',
  cell: 'M12 3a4 4 0 0 1 4 4v1h1a4 4 0 0 1 0 8h-1v1a4 4 0 0 1-8 0v-1H7a4 4 0 0 1 0-8h1V7a4 4 0 0 1 4-4Z M12 9v6M9 12h6',
  pen: 'M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14 7l3 3',
  building: 'M4 21V9l8-5 8 5v12M9 21v-6h6v6M4 21h16M9 11h.01M15 11h.01',
  train: 'M7 3h10a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3l2 3M5 21l2-3a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2M5 12h14M8.5 15.5h.01M15.5 15.5h.01',
  cap: 'M2 9l10-5 10 5-10 5L2 9ZM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6',
  check: 'M5 12.5l4.5 4.5L19 7M4 4h16v16H4z',
  help: 'M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8M12 17h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
  flask: 'M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3M7.5 15h9',
  snow: 'M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11M9 4l3 2 3-2M9 20l3-2 3 2',
  trophy: 'M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 21h8M10 17h4',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20a6.5 6.5 0 0 1 13 0M16 4.2a3.5 3.5 0 0 1 0 6.6M18 14a6 6 0 0 1 3.5 6',
  doc: 'M6 3h8l4 4v14H6V3ZM14 3v4h4M9 12h6M9 16h6',
  heart: 'M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.200 12 20 12 20Z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  pin: 'M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  wa: 'M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.500L3 21Zm6-12c0 3 3 6 6 6l1.200-1.500-2-1-1 .7c-1-.4-2-1.400-2.400-2.400l.7-1-1-2L9 9Z',
  plus: 'M12 5v14M5 12h14',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM17.5 6.5h.01',
}

export default function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={P[name] ?? P.book} />
    </svg>
  )
}
