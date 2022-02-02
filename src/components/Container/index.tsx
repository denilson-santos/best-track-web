import React from 'react';

import * as Styles from './styles';

type ContainerProps = React.ComponentProps<typeof Styles.Container>;

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <Styles.Container>{children}</Styles.Container>
);
