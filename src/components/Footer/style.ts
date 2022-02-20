import { styled } from '../../../stitches.config';

export const Root = styled('footer', {
  '.links': {
    padding: '70px 0 50px 0',

    '& > div': {
      '.link-items': {
        textAlign: 'center',

        '@sm': {
          textAlign: 'left',
        },

        '.logo-footer, .link-groups': {
          color: '$blackA9',
        },

        '.link-groups h3': {
          color: '$gray10',
          fontSize: '19px',
          fontWeight: '400',
          marginTop: '10px',
          marginBottom: '10px',
        },

        '.link-groups ul': {
          listStyle: 'none',

          li: {
            lineHeight: '22px',
            fontSize: '15px',

            svg: {
              verticalAlign: 'middle',
              marginRight: '4px',
            },
          },

          'a:hover': {
            transition: '.2s',
            color: '$primary',
          },

          'a.active': {
            color: '$primary',
          },
        },
      },
    },
  },

  '.copyright': {
    height: '50px',
    backgroundColor: '$primary',
    color: '$whiteA12',
    lineHeight: '50px',
    textAlign: 'center',
  },
});
