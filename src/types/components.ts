import { ReactNode } from 'react';

export interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export interface LabelProps {
  htmlFor: string;
  text: string;
}

export interface TextareaProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export interface FormGroupProps {
  children: ReactNode;
}

export interface ErrorMessageProps {
  message: string;
}