import React from 'react';
import { ErrorMessageProps } from '../../types';

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return <p className="text-sm text-red-700">{message}</p>;
};