import React, { InputHTMLAttributes } from 'react';
import * as Style from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  React.ComponentProps<typeof Style.Root>;

export const Input: React.FC<InputProps> = (props) => <Style.Root {...props} />;
