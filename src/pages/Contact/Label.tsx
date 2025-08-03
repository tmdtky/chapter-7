import React from 'react';
import { LabelProps } from '../../types';

export const Label = ({ htmlFor, text }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="w-60 text-left">
      {text}
    </label>
  );
};