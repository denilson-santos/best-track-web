import { styled } from '../../../stitches.config';

export const Root = styled('button', {
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
        '&:disabled': {
          backgroundColor: '$blue8',
          borderColor: '$blue8',
          cursor: 'no-drop',
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
        '&:disabled': {
          backgroundColor: '$gray8',
          borderColor: '$gray8',
          cursor: 'no-drop',
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
        '&:disabled': {
          backgroundColor: '$green8',
          borderColor: '$green8',
          cursor: 'no-drop',
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
        '&:disabled': {
          backgroundColor: '$red8',
          borderColor: '$red8',
          cursor: 'no-drop',
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
        '&:disabled': {
          backgroundColor: '$yellow8',
          borderColor: '$yellow8',
          cursor: 'no-drop',
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
        '&:disabled': {
          backgroundColor: '$sky8',
          borderColor: '$sky8',
          cursor: 'no-drop',
        },
      },
      light: {
        backgroundColor: '$whiteA12',
        color: '$blackA12',
        borderWidth: '$1',
        borderStyle: 'solid',
        borderColor: '$whiteA7',
        '&:hover': {
          backgroundColor: '$whiteA11',
          borderColor: '$whiteA8',
        },
        '&:disabled': {
          backgroundColor: '$whiteA8',
          borderColor: '$whiteA8',
          cursor: 'no-drop',
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
      full: {
        width: '100%',
        padding: '10px 16px',
        fontSize: '18px',
        borderRadius: '4px',
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
    withIcon: {
      true: {
        '.button-icon': {
          marginLeft: '5px',
          verticalAlign: 'middle',
        },
      },
      noContent: {
        '.button-icon': {
          margin: '0',
          verticalAlign: 'middle',
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
    {
      color: 'light',
      outlined: 'true',
      css: {
        backgroundColor: 'transparent',
        borderColor: '$light',
        color: '$light',
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: '$whiteA11',
          color: '$whiteA11',
        },
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    withIcon: 'false',
  },
});
