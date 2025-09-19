import React from 'react';

export const OrganizationChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="6" height="6" rx="1"></rect>
    <rect x="15" y="3" width="6" height="6" rx="1"></rect>
    <rect x="9" y="15" width="6" height="6" rx="1"></rect>
    <path d="M6 9v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9"></path>
    <path d="M18 9v4a2 2 0 0 1-2 2h-2"></path>
    <path d="M12 15v-2"></path>
  </svg>
);