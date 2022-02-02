import React, { LabelHTMLAttributes } from 'react';

import * as Styles from './style';

type LabelProps = LabelHTMLAttributes<HTMLInputElement> &
  React.ComponentProps<typeof Styles.Root>;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => (
  <Styles.Root {...rest}>{children}</Styles.Root>
);
