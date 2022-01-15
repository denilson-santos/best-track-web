import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as Styles from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof Styles.Button> & {
    icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconSize,
  ...rest
}) => (
  <Styles.Button
    withIcon={Icon ? (children ? true : 'noContent') : false}
    {...rest}
  >
    {children}
    {Icon && <Icon size={iconSize} className="button-icon" />}
  </Styles.Button>
);
