import React from 'react';
import { InputProps } from '../../types';

export const Input: React.FC<InputProps> = ({ type, id, value, onChange, disabled }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`border border-gray-300 rounded-lg p-4 w-full ${
        disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'
      }`}
    />
  );
};