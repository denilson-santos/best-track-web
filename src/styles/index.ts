import { styled } from '../../stitches.config';

export const Header = styled('header', {
  width: '100%',
  height: '80px',
  backgroundColor: '$primary',
  color: '$whiteA12',
  position: 'fixed',
  zIndex: '999',

  '&.scroll-down': {
    height: '90px',
    backgroundColor: '$whiteA12',
    color: '$primary',
    boxShadow: '0px 0px 5px #bbb',

    transition: 'all .3s',

    'a:hover::before, a:hover::after': {
      backgroundColor: '$primary',
    },
  },

  '&.scroll-up': {
    height: '80px',
    backgroundColor: '$primary',
    color: '$whiteA12',

    transition: 'all .3s',
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

export const Hero = styled('div', {
  height: 'calc(50vh - 80px)',
  backgroundColor: '$primary',
  color: '$whiteA12',
  position: 'relative',
  top: '80px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > div': {
    width: '715px',
  },

  h1: {
    fontSize: '27px',
    fontWeight: '500',
  },

  '.search-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',

    input: {
      flex: 1,
      height: '45px',
      padding: '0 15px',
      fontSize: '17px',
      border: 'none',
      color: '$gray9',
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',

      '&:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: '$gray9',
      },
    },

    button: {
      width: '70px',
      borderColor: '$whiteA12',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
  },

  '.last-trackings': {
    display: 'flex',

    '& > span': {
      marginRight: '5px',
    },
    '.codes': {
      display: 'flex',

      div: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        margin: '0 3px',
        border: '1px solid $whiteA12',
        borderRadius: '3px',
        fontSize: '11px',
        fontWeight: '500',

        '&:hover': {
          cursor: 'pointer',
        },
        '.last-tracking-close': {
          verticalAlign: 'middle',
          marginLeft: '5px',
        },
      },
    },
  },
  p: {
    marginTop: '30px',
    lineHeight: '22px',
    fontSize: '15px',
  },
});
