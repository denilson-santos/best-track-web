import { styled } from '@stitches/react';

export const Container = styled('div', {
  padding: '0 2rem',
});

export const Main = styled('main', {
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled('h1', {
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
});
