import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        ${hover ? 'hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}