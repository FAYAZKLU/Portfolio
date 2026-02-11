import React from 'react';

export const Card = ({ className = '', ...props }) => (
  <div className={`rounded-2xl border ${className}`} {...props} />
);
