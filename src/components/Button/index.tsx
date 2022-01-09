import React, { ButtonHTMLAttributes } from 'react';
import * as Styles from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof Styles.Button>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Styles.Button {...rest}>{children}</Styles.Button>
);
