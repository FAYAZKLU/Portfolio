import React from 'react';

export const Badge = ({ className = '', variant, ...props }) => {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border';
  return <span className={`${base} ${className}`} {...props} />;
};
