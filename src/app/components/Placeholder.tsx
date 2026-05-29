export default function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-carbon-soft">
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f6c34b"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22c0-4 2-7 5-9" />
          <path d="M12 22c0-4-2-7-5-9" />
          <path d="M12 13c0-3 1.6-5.4 4-7-2.6.3-4 1.7-4 4 0-2.3-1.4-3.7-4-4 2.4 1.6 4 4 4 7Z" />
          <path d="M12 13V22" />
        </svg>
        <span className="font-display text-sm italic text-gold/40">{name}</span>
      </div>
    </div>
  );
}
