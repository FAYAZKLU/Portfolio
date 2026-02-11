import React from 'react';

export const Button = ({ className = '', variant, size, ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-current bg-transparent',
  };
  const sizes = {
    sm: 'h-9 px-3 py-2 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-6 py-3',
  };
  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.md;
  return <button className={`${base} ${v} ${s} ${className}`} {...props} />;
};
