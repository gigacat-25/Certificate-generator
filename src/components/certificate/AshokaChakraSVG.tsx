import React from 'react';

interface ChakraProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const AshokaChakraSVG: React.FC<ChakraProps> = ({ className, size = '100%', ...props }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#000088" strokeWidth="1.5">
        {/* Outer concentric circles */}
        <circle cx="60" cy="60" r="54" />
        <circle cx="60" cy="60" r="50" strokeWidth="1" strokeDasharray="1 1" />
        <circle cx="60" cy="60" r="48" strokeWidth="1.2" />

        {/* Center hub circles */}
        <circle cx="60" cy="60" r="10" fill="#000088" fillOpacity="0.1" />
        <circle cx="60" cy="60" r="6" fill="#000088" />
        <circle cx="60" cy="60" r="2.5" fill="#ffffff" />

        {/* 24 Spokes */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = i * 15;
          return (
            <g key={`spoke-${i}`} transform={`rotate(${angle} 60 60)`}>
              {/* Main spoke line */}
              <line x1="60" y1="60" x2="60" y2="12" strokeWidth="1.5" />
              {/* Spoke triangular base/arrowhead detail typical in Ashoka Chakra */}
              <path
                d="M 58.5 24 L 60 12 L 61.5 24 Z"
                fill="#000088"
                stroke="none"
              />
              {/* Half-moon scalloped boundary outlines between teeth */}
              <path
                d="M 57 12.5 Q 60 14.5, 63 12.5"
                fill="none"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {/* 24 small dots between the spokes along the outer boundary */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = i * 15 + 7.5;
          return (
            <circle
              key={`dot-${i}`}
              cx="60"
              cy="10.5"
              r="1.2"
              fill="#000088"
              stroke="none"
              transform={`rotate(${angle} 60 60)`}
            />
          );
        })}
      </g>
    </svg>
  );
};
export default AshokaChakraSVG;
