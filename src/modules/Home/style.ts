import { styled } from '../../../stitches.config';

export const Hero = styled('section', {
  height: '48vh',
  backgroundColor: '$primary',
  color: '$whiteA12',
  paddingTop: '90px',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > div': {
    width: '100%',

    '@sm': {
      width: '100%',
    },
    '@lg': {
      width: '715px',
    },
  },

  h1: {
    fontSize: '22px',
    fontWeight: '500',

    '@sm': {
      fontSize: '24px',
      fontWeight: '500',
    },
    '@md': {
      fontSize: '27px',
      fontWeight: '500',
    },
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
    flexWrap: 'wrap',
    gap: '5px',

    '& > span': {
      lineHeight: '22px',
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
        fontSize: '14px',
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

export const Section = styled('section', {
  marginBottom: '50px',

  h2: {
    color: '$gray11',
    fontWeight: '500',
    textAlign: 'center',
    margin: '0 0 50px 0',

    '&:after': {
      content: '',
      display: 'block',
      width: '70px',
      height: '3px',
      backgroundColor: '$primary',
      margin: '5px auto 0',
    },
  },

  '&.about-container': {
    '.about-wrapper': {
      h3: {
        color: '$gray10',
        marginBottom: '40px',
        fontSize: '26px',
        fontWeight: '500',
        textAlign: 'center',

        '@sm': {
          fontSize: '30px',
          textAlign: 'left',
        },
        '@lg': {
          fontSize: '35px',
        },
      },

      p: {
        color: '$gray9',
        marginBottom: '15px',
        fontSize: '18px',
        lineHeight: '25px',
        textIndent: '20px',
        textAlign: 'center',

        '@sm': {
          textAlign: 'left',
        },
      },

      button: {
        width: '100%',
        height: '45px',
        fontSize: '16px',
        marginTop: '25px',
        textAlign: 'center',

        '@sm': {
          width: '180px',
        },
      },
    },
  },

  '&.features-container': {
    backgroundColor: '$primary',
    padding: '50px 0',
    marginBottom: '0',

    '.features-items': {
      '.features-item': {
        textAlign: 'center',
      },

      h4: {
        color: '$whiteA12',
        fontSize: '20px',
        fontWeight: '500',
        marginTop: '10px',
        marginBottom: '20px',
      },

      p: {
        color: '$whiteA12',
        fontSize: '15px',
        lineHeight: '20px',
      },
    },
  },

  '&.carriers-container': {
    '.carriers-item': {
      height: '200px',
      position: 'relative',
      overflow: 'hidden',

      '&:hover .carriers-content': {
        cursor: 'pointer',

        bottom: '0',

        h3: {
          height: '200px',
          fontSize: '22px',
          padding: '12px',
        },
      },

      '.carriers-content': {
        width: '100%',
        height: '200px',
        backgroundColor: '$blackA10',

        transition: '.3s',
        position: 'absolute',
        bottom: '-160px',

        h3: {
          color: '$whiteA12',
          padding: '10px',
          transition: '.3s',
        },

        svg: {
          color: '$whiteA12',

          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '35px',
          height: '35px',
        },
      },
    },
  },

  '&.indicate-carrier-container': {
    backgroundColor: '$primary',
    paddingBottom: '50px',
    marginBottom: '0',

    'h2, p, label, input': {
      color: '$whiteA12',
    },

    'h2::after': {
      backgroundColor: '$whiteA12',
    },

    p: {
      marginBottom: '30px',
    },

    button: {
      color: '$primary',
    },

    '& > div': {
      width: '100%',

      '@sm': {
        width: '100%',
      },
      '@lg': {
        width: '630px',
      },
    },
  },
});
