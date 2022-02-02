import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  variants: {
    type: {
      default: {
        display: 'grid',
      },
      inline: {
        display: 'inline-grid',
      },
    },

    columns: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
      9: {
        gridTemplateColumns: 'repeat(9, 1fr)',
      },
      10: {
        gridTemplateColumns: 'repeat(10, 1fr)',
      },
      11: {
        gridTemplateColumns: 'repeat(11, 1fr)',
      },
      12: {
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    },

    gap: {
      1: {
        gridGap: '5px',
      },
      2: {
        gridGap: '10px',
      },
      3: {
        gridGap: '15px',
      },
      4: {
        gridGap: '20px',
      },
      5: {
        gridGap: '25px',
      },
      6: {
        gridGap: '30px',
      },
    },
  },

  defaultVariants: {
    type: 'default',
  },
});

export const Item = styled('div', {});
