import React from 'react';

import * as Styles from './styles';

type ContainerProps = React.ComponentProps<typeof Styles.Container>;

type ItemProps = React.ComponentProps<typeof Styles.Item>;

export const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <Styles.Container {...rest}>{children}</Styles.Container>
);

export const Item: React.FC<ItemProps> = ({ children, ...rest }) => (
  <Styles.Item {...rest}>{children}</Styles.Item>
);
