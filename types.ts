import React from 'react';

export type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export interface Tool {
  id: string;
  title: string;
  subtitle: string;
  icon: IconType;
  link: string;
}

export interface QuickLink {
  id: string;
  title: string;
  icon: IconType;
  link: string;
}