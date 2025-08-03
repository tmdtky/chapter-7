import React from 'react';
import { InputProps } from '../../types';

export const Input = ({ type, id, value, onChange, disabled }: InputProps) => {
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