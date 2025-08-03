import React from 'react';
import { FormGroupProps } from '../../types';

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div className="flex items-center mb-6 gap-6">
      {children}
    </div>
  );
};