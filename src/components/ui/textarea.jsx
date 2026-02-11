import React from 'react';

export const Textarea = ({ className = '', ...props }) => (
  <textarea className={`w-full rounded-md border px-3 py-2 focus:outline-none ${className}`} {...props} />
);
