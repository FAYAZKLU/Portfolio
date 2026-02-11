import React from 'react';

export const Input = ({ className = '', ...props }) => (
  <input className={`w-full rounded-md border px-3 py-2 focus:outline-none ${className}`} {...props} />
);
