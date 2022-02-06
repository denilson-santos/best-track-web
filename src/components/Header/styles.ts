import { styled } from '../../../stitches.config';

export const Root = styled('header', {
  width: '100%',
  height: '90px',
  backgroundColor: '$primary',
  color: '$whiteA12',
  position: 'fixed',
  zIndex: '999',

  '&.scrolling': {
    height: '70px',
    backgroundColor: '$whiteA12',
    color: '$primary',
    boxShadow: '0px 0px 5px var(--colors-gray7)',

    transition: 'all .35s',

    a: {
      '&::before, &::after': {
        backgroundColor: '$primary',
      },

      '&:hover::before, &:hover::after': {
        backgroundColor: '$primary',
      },

      '&.active::before, &.active::after': {
        width: '50%',
        backgroundColor: '$primary',
      },
    },
  },

  '&.scroll-initial': {
    height: '90px',
    backgroundColor: '$primary',
    color: '$whiteA12',

    transition: 'all .35s',
  },

  '& > div': {
    height: 'inherit',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    height: '36px',
    lineHeight: '36px',

    ul: {
      display: 'flex',
      listStyle: 'none',

      li: {
        position: 'relative',
        margin: '0 15px',

        a: {
          fontSize: '16px',
          fontWeight: '500',
          letterSpacing: '1px',
          padding: '9px',

          '&::before': {
            content: '',
            width: '0%',
            height: '2px',
            display: 'inline-block',
            backgroundColor: '$whiteA12',
            position: 'absolute',
            bottom: '0',
            left: '50%',

            transition: 'width .3s',
          },

          '&::after': {
            content: '',
            width: '0%',
            height: '2px',
            display: 'inline-block',
            backgroundColor: '$whiteA12',
            position: 'absolute',
            bottom: '0',
            right: '50%',

            transition: 'width .3s',
          },

          '&.active::before, &.active::after': {
            width: '50%',
          },

          '&:hover::before': {
            content: '',
            width: '50%',
            height: '2px',
            display: 'inline-block',
            backgroundColor: '$whiteA12',
            position: 'absolute',
          },

          '&:hover::after': {
            content: '',
            width: '50%',
            height: '2px',
            display: 'inline-block',
            backgroundColor: '$whiteA12',
            position: 'absolute',
          },
        },
      },
    },
  },
});
