import React from 'react';
import { FormGroupProps } from '../../types';

export const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return (
    <div className="flex items-center mb-6 gap-6">
      {children}
    </div>
  );
};