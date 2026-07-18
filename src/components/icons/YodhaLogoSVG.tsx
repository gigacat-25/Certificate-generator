import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  glow?: boolean;
}

export const YodhaLogoSVG: React.FC<LogoProps> = ({ className, glow = false, ...props }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Gold Gradients */}
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bf953f" />
          <stop offset="25%" stopColor="#fcf6ba" />
          <stop offset="50%" stopColor="#b38728" />
          <stop offset="75%" stopColor="#fbf5b7" />
          <stop offset="100%" stopColor="#aa771c" />
        </linearGradient>
        <linearGradient id="gold-border-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#aa771c" />
          <stop offset="50%" stopColor="#fcf6ba" />
          <stop offset="100%" stopColor="#b38728" />
        </linearGradient>
        {/* Tricolor Gradients */}
        <linearGradient id="saffron-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#CC6600" />
        </linearGradient>
        <linearGradient id="green-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#128807" />
          <stop offset="100%" stopColor="#0B5504" />
        </linearGradient>
        {/* Glow Filter */}
        {glow && (
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>

      {/* Crossed Swords (Behind the Shield) */}
      <g id="crossed-swords" opacity="0.85">
        {/* Sword 1 (Top-Left to Bottom-Right) */}
        <path
          d="M 40 40 L 160 160"
          stroke="url(#gold-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sword 1 Guard/Hilt */}
        <path d="M 52 32 L 32 52" stroke="url(#gold-gradient)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="34" cy="34" r="5" fill="url(#gold-gradient)" />

        {/* Sword 2 (Top-Right to Bottom-Left) */}
        <path
          d="M 160 40 L 40 160"
          stroke="url(#gold-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sword 2 Guard/Hilt */}
        <path d="M 148 32 L 168 52" stroke="url(#gold-gradient)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="166" cy="34" r="5" fill="url(#gold-gradient)" />
      </g>

      {/* Main Shield Outline */}
      {/* A classic military shield shape path: 
          Start top-center: (100, 30)
          Curve to top-right corner: (150, 45)
          Straight-ish down with curve to bottom-center point: (100, 175)
          Curve back up to top-left corner: (50, 45)
          Curve back to top-center.
      */}
      <path
        d="M 100 30 
           Q 125 35, 155 45 
           Q 155 110, 100 175 
           Q 45 110, 45 45 
           Q 75 35, 100 30 Z"
        fill="#112215"
        stroke="url(#gold-border-gradient)"
        strokeWidth="6"
        filter={glow ? "url(#gold-glow)" : undefined}
      />

      {/* Inner Shield Border (Gold wireframe) */}
      <path
        d="M 100 40 
           Q 122 44, 147 52 
           Q 147 105, 100 162 
           Q 53 105, 53 52 
           Q 78 44, 100 40 Z"
        stroke="url(#gold-gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="4 2"
      />

      {/* Tricolor Chevron / Ribbon Element */}
      <g id="tricolor-chevron" opacity="0.9">
        {/* Saffron Ribbon Segment */}
        <path
          d="M 70 85 Q 100 95, 130 85"
          stroke="url(#saffron-grad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* White Ribbon Segment */}
        <path
          d="M 68 93 Q 100 103, 132 93"
          stroke="#ffffff"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Green Ribbon Segment */}
        <path
          d="M 70 101 Q 100 111, 130 101"
          stroke="url(#green-grad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Centered Ashoka Chakra inside the chevron */}
      <g id="mini-chakra" transform="translate(100, 97)">
        <circle cx="0" cy="0" r="8" stroke="#000088" strokeWidth="1" fill="#ffffff" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={`mini-spoke-${i}`}
            x1="0"
            y1="0"
            x2="0"
            y2="-8"
            stroke="#000088"
            strokeWidth="0.5"
            transform={`rotate(${i * 15})`}
          />
        ))}
      </g>

      {/* 3 Gold Stars at the top */}
      <g id="shield-stars" fill="url(#gold-gradient)" transform="translate(0, -5)">
        {/* Star 1 (Center) */}
        <path d="M 100 52 L 102 57 L 107 57 L 103 60 L 105 65 L 100 62 L 95 65 L 97 60 L 93 57 L 98 57 Z" />
        {/* Star 2 (Left) */}
        <path d="M 80 55 L 82 60 L 87 60 L 83 63 L 85 68 L 80 65 L 75 68 L 77 63 L 73 60 L 78 60 Z" />
        {/* Star 3 (Right) */}
        <path d="M 120 55 L 122 60 L 127 60 L 123 63 L 125 68 L 120 65 L 115 68 L 117 63 L 113 60 L 118 60 Z" />
      </g>

      {/* "YODHA" Text inside shield */}
      <text
        x="100"
        y="142"
        fill="url(#gold-gradient)"
        fontSize="16"
        fontWeight="900"
        fontFamily="var(--font-sans), sans-serif"
        textAnchor="middle"
        letterSpacing="2"
      >
        YODHA
      </text>

      <text
        x="100"
        y="124"
        fill="#ffffff"
        fontSize="8"
        fontWeight="700"
        fontFamily="var(--font-sans), sans-serif"
        textAnchor="middle"
        letterSpacing="3"
        opacity="0.8"
      >
        PROJECT
      </text>
    </svg>
  );
};
