export default function PhoenixLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Prometheus phoenix"
    >
      <defs>
        <linearGradient id="ph-body" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5D6" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="ph-wl" x1="10" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFF5D6" />
        </linearGradient>
        <linearGradient id="ph-wr" x1="190" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFF5D6" />
        </linearGradient>
        <linearGradient id="ph-tail" x1="100" y1="155" x2="100" y2="218" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="40%" stopColor="#D4872A" />
          <stop offset="100%" stopColor="#C04020" />
        </linearGradient>
        <filter id="ph-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left wing */}
      <path d="M96 86 Q68 52 32 16 Q22 8 14 14 Q28 34 46 50 Q66 70 88 84Z" fill="url(#ph-wl)" opacity="0.5" />
      <path d="M98 92 Q74 62 40 28 Q28 18 20 24 Q36 44 52 60 Q70 78 92 92Z" fill="url(#ph-wl)" opacity="0.75" />
      <path d="M100 100 Q78 78 50 48 Q38 38 28 44 Q44 58 58 70 Q76 86 96 98Z" fill="#FFD700" />

      {/* Right wing */}
      <path d="M104 86 Q132 52 168 16 Q178 8 186 14 Q172 34 154 50 Q134 70 112 84Z" fill="url(#ph-wr)" opacity="0.5" />
      <path d="M102 92 Q126 62 160 28 Q172 18 180 24 Q164 44 148 60 Q130 78 108 92Z" fill="url(#ph-wr)" opacity="0.75" />
      <path d="M100 100 Q122 78 150 48 Q162 38 172 44 Q156 58 142 70 Q124 86 104 98Z" fill="#FFD700" />

      {/* Body */}
      <path
        d="M100 46 Q110 72 111 90 Q112 106 110 120 Q108 140 100 158 Q92 140 90 120 Q88 106 89 90 Q90 72 100 46Z"
        fill="url(#ph-body)"
        filter="url(#ph-glow)"
      />

      {/* Head */}
      <circle cx="100" cy="58" r="10" fill="#FFF5D6" />
      <circle cx="100" cy="58" r="6" fill="#FFD700" />

      {/* Tail */}
      <path d="M100 155 Q93 178 86 200 Q84 210 88 218 Q94 205 100 190 Q106 205 112 218 Q116 210 114 200 Q107 178 100 155Z" fill="url(#ph-tail)" />
      <path d="M100 160 Q97 184 96 200 Q95.5 210 100 217 Q104.5 210 104 200 Q103 184 100 160Z" fill="#FFD700" opacity="0.7" />
      <path d="M90 174 Q83 190 78 204 Q76 212 80 215 Q84 207 86 198 Q88 186 90 174Z" fill="#DAA520" opacity="0.5" />
      <path d="M110 174 Q117 190 122 204 Q124 212 120 215 Q116 207 114 198 Q112 186 110 174Z" fill="#DAA520" opacity="0.5" />
    </svg>
  );
}
