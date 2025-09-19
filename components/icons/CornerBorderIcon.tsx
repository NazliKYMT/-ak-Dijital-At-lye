import React from 'react';

export const CornerBorderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 100 100"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <path 
      d="M96 4 H25 A21 21 0 0 0 4 25 V96"
      stroke="currentColor"
      strokeWidth="8" 
      strokeLinecap="round" 
    />
  </svg>
);
