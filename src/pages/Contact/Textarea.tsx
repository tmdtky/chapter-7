import React from 'react';
import { TextareaProps } from '../../types';

export const Textarea = ({ id, value, onChange, disabled }: TextareaProps) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      rows={8}
      className={`w-full border border-gray-300 rounded-lg p-4 ${
        disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'
      }`}
    />
  );
};