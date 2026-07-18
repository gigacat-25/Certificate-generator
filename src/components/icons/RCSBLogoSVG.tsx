import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  theme?: 'dark' | 'light' | 'gold';
}

export const RCSBLogoSVG: React.FC<LogoProps> = ({ className, theme = 'gold', ...props }) => {
  const primaryColor = theme === 'dark' ? '#1b3a24' : theme === 'light' ? '#ffffff' : '#d4af37';
  const secondaryColor = theme === 'dark' ? '#0f2416' : theme === 'light' ? '#f3f4f6' : '#ffd700';

  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Rotaract Emblem - Gear and Circle */}
      <g id="gear-emblem" transform="translate(10, 10)">
        <circle cx="30" cy="30" r="22" stroke={primaryColor} strokeWidth="2.5" />
        <circle cx="30" cy="30" r="17" fill={primaryColor} fillOpacity="0.1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <path
              key={i}
              d="M 30 6 L 30 9"
              stroke={primaryColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${angle} 30 30)`}
            />
          );
        })}
        <circle cx="30" cy="30" r="8" stroke={primaryColor} strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="4" fill={secondaryColor} />
        <rect x="29" y="26" width="2" height="4" fill={primaryColor} />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 6;
          return (
            <line
              key={`spoke-${i}`}
              x1="30"
              y1="30"
              x2="30"
              y2="12"
              stroke={primaryColor}
              strokeWidth="2"
              transform={`rotate(${angle} 30 30)`}
            />
          );
        })}
      </g>

      {/* Typography */}
      <text
        x="80"
        y="32"
        fill={theme === 'dark' ? '#0f2416' : '#ffffff'}
        fontSize="17"
        fontWeight="800"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="2"
      >
        ROTARACT
      </text>
      <text
        x="80"
        y="48"
        fill={primaryColor}
        fontSize="12"
        fontWeight="600"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="1"
      >
        SWARNA BENGALURU
      </text>
      <text
        x="80"
        y="60"
        fill={theme === 'dark' ? '#6b7280' : '#a1a1aa'}
        fontSize="8"
        fontWeight="500"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="1.5"
      >
        RID 3191 | CLUB NO. 90726
      </text>

      {/* Elegant divider line */}
      <line x1="72" y1="18" x2="72" y2="62" stroke={primaryColor} strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
};
