import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  transition: 'background-color .2s',
  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$blue7',
        '&:hover': {
          backgroundColor: '$main2',
          borderColor: '$blue8',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$gray7',
        '&:hover': {
          backgroundColor: '$gray10',
          borderColor: '$gray8',
        },
      },
      success: {
        backgroundColor: '$success',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$green7',
        '&:hover': {
          backgroundColor: '$green10',
          borderColor: '$green8',
        },
      },
      error: {
        backgroundColor: '$error',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$red7',
        '&:hover': {
          backgroundColor: '$red10',
          borderColor: '$red8',
        },
      },
      warning: {
        backgroundColor: '$warning',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$yellow7',
        '&:hover': {
          backgroundColor: '$yellow10',
          borderColor: '$yellow8',
        },
      },
      info: {
        backgroundColor: '$info',
        color: '$whiteA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$sky7',
        '&:hover': {
          backgroundColor: '$sky10',
          borderColor: '$sky8',
        },
      },
    },
    size: {
      sm: {
        padding: '4px 8px',
        fontSize: '14px',
        borderRadius: '3px',
      },
      md: {
        padding: '6px 12px',
        fontSize: '16px',
        borderRadius: '4px',
      },
      lg: {
        padding: '8px 16px',
        fontSize: '20px',
        borderRadius: '5px',
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        borderColor: '$primary',
        color: '$primary',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$blue8',
          color: '$blue8',
        },
      },
    },
  },
  compoundVariants: [
    {
      color: 'secondary',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$secondary',
        color: '$secondary',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$gray8',
          color: '$gray8',
        },
      },
    },
    {
      color: 'success',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$success',
        color: '$success',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$green8',
          color: '$green8',
        },
      },
    },
    {
      color: 'error',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$error',
        color: '$error',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$red8',
          color: '$red8',
        },
      },
    },
    {
      color: 'warning',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$warning',
        color: '$warning',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$yellow8',
          color: '$yellow8',
        },
      },
    },
    {
      color: 'info',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$info',
        color: '$info',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$sky8',
          color: '$sky8',
        },
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});
