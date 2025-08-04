import React from 'react';
import { ErrorMessageProps } from '../../types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <p className="text-sm text-red-700">{message}</p>;
};