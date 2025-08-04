import React from 'react';
import { LabelProps } from '../../types';

export const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="w-60 text-left">
      {text}
    </label>
  );
};