import { styled } from '../../../stitches.config';

export const Root = styled('header', {
  width: '100%',
  height: '90px',
  backgroundColor: '$primary',
  color: '$whiteA12',
  position: 'fixed',
  zIndex: '999',

  '&.scrolling': {
    backgroundColor: '$whiteA12',
    height: '70px',
    color: '$primary',
    boxShadow: '0px 0px 5px var(--colors-gray7)',

    transition: 'all .35s',

    nav: {
      backgroundColor: '$whiteA12',

      ul: {
        height: 'calc(100% - 70px)',
        marginTop: '70px',

        'a.active': {
          backgroundColor: '$primary',
          color: '$whiteA12',
        },
      },
    },

    'label.menu-mobile-switch-wrapper': {
      '.icon': {
        backgroundColor: '$primary',
      },
    },

    '@lg': {
      backgroundColor: '$whiteA12',

      nav: {
        backgroundColor: 'revert',
        top: 'revert',

        ul: {
          height: 'revert',
          marginTop: '0',

          'a.active': {
            backgroundColor: 'revert',
            color: '$primary',
          },
        },
      },
    },

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

  '&.scrolling.menu-mobile-opened': {
    backgroundColor: 'revert',
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
    lineHeight: '36px',

    position: 'absolute',
    left: '0',
    backgroundColor: '$primary',
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    top: '-100vh',
    zIndex: '-1',

    transition: '.35s',

    ul: {
      height: 'calc(100% - 90px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      listStyle: 'none',
      marginTop: '90px',

      transition: 'margin .35s',

      li: {
        position: 'relative',
        margin: '0 15px',
        padding: '40px 0',

        a: {
          fontSize: '25px',
          fontWeight: '400',
          letterSpacing: '1px',
          padding: '9px 40px',

          transition: 'background-color .35s',
        },

        'a.active': {
          backgroundColor: '$whiteA12',
          color: '$primary',
          borderRadius: '4px',
        },
      },
    },

    '@lg': {
      display: 'block',
      position: 'static',
      left: 'revert',
      backgroundColor: 'transparent',
      zIndex: 'revert',

      width: 'revert',
      height: 'revert',
      textAlign: 'center',
      top: 'revert',

      ul: {
        height: 'revert',
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        marginTop: '0',

        li: {
          position: 'relative',
          margin: '0 15px',
          padding: 'revert',

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

            '&.active': {
              backgroundColor: 'revert',
              color: '$whiteA12',
              borderRadius: 'revert',
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
  },

  'label.menu-mobile-switch-wrapper': {
    display: 'block',
    position: 'relative',
    width: '25px',
    height: '18px',
    cursor: 'pointer',

    '@lg': {
      display: 'none',
    },

    '.icon': {
      width: '25px',
      height: '2px',
      backgroundColor: '$whiteA12',
      borderRadius: '1px',
    },

    '.icon-top': {
      position: 'absolute',
      top: '0',
      transition: '.2s',
    },

    '.icon-middle': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: '.2s',
    },

    '.icon-bottom': {
      position: 'absolute',
      bottom: '0',
      transition: '.2s',
    },
  },

  '#menu_mobile_switch': {
    display: 'none',
  },

  '#menu_mobile_switch:checked + nav': {
    top: '0',
  },

  '#menu_mobile_switch:checked ~ label .icon-top': {
    top: '50%',
    transform: 'rotate(-40deg) translateY(-50%)',
  },

  '#menu_mobile_switch:checked ~ label .icon-middle': {
    backgroundColor: 'transparent',
  },

  '#menu_mobile_switch:checked ~ label .icon-bottom': {
    top: '50%',
    transform: 'rotate(40deg) translateY(-50%)',
  },
});
