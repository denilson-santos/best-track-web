import { styled } from '../../../stitches.config';

export const Root = styled('input', {
  width: '100%',
  height: '45px',
  padding: '0 15px',
  fontSize: '17px',
  border: '1px solid $gray8',
  color: '$gray11',
  borderRadius: '4px',

  '&:focus': {
    borderColor: '$primary',
  },
  '&::placeholder': {
    color: '$gray9',
  },

  variants: {
    outlined: {
      true: {
        backgroundColor: 'transparent',
        borderColor: '$whiteA11',
        color: '$whiteA12',

        '&:focus': {
          borderColor: '$whiteA12',
        },

        '&::placeholder': {
          color: '$whiteA11',
        },
      },
    },
  },
});
