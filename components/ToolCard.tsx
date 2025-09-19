import React from 'react';
import type { Tool } from '../types';
import { CornerBorderIcon } from './icons/CornerBorderIcon';

interface ToolCardProps {
  tool: Tool;
  isFirst?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isFirst = false }) => {
  const { title, subtitle, icon: Icon, link } = tool;

  return (
    <div className="relative h-full group transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
      {isFirst && (
        <CornerBorderIcon 
            className="absolute -top-2 -left-2 w-24 h-24 text-turquoise pointer-events-none" 
        />
      )}
      <a 
        href={link} 
        className="bg-secondary text-light-text rounded-2xl px-10 py-12 flex items-center gap-5 w-full h-full transition-shadow duration-300 ease-in-out group-hover:shadow-xl group-hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-light-bg"
      >
        <div className="flex-shrink-0 w-12 flex items-center justify-center">
          <Icon className="w-12 h-12" />
        </div>
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="opacity-80">{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default ToolCard;
