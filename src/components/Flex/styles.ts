import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  variants: {
    type: {
      default: {
        display: 'flex',
      },
      inline: {
        display: 'inline-flex',
      },
    },

    direction: {
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
    },

    justifyContent: {
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      center: {
        justifyContent: 'center',
      },
    },

    alignItems: {
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
      center: {
        alignItems: 'center',
      },
    },

    gap: {
      0: {
        gap: '0',
      },
      1: {
        gap: '5px',
      },
      2: {
        gap: '10px',
      },
      3: {
        gap: '15px',
      },
      4: {
        gap: '20px',
      },
      5: {
        gap: '25px',
      },
      6: {
        gap: '30px',
      },
    },

    wrap: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
  },

  defaultVariants: {
    type: 'default',
    direction: 'row',
    gap: '3',
    wrap: 'false',
  },
});

export const Item = styled('div', {
  variants: {
    column: {
      1: {
        width: 'calc(100% / 12)',
      },
      2: {
        width: 'calc(100% / 6)',
      },
      3: {
        width: 'calc(100% / 4)',
      },
      4: {
        width: 'calc(100% / 3)',
      },
      5: {
        width: 'calc(100% / 2.4)',
      },
      6: {
        width: 'calc(100% / 2)',
      },
      7: {
        width: 'calc(100% / 1.71428571)',
      },
      8: {
        width: 'calc(100% / 1.5)',
      },
      9: {
        width: 'calc(100% / 1.33333333)',
      },
      10: {
        width: 'calc(100% / 1.2)',
      },
      11: {
        width: 'calc(100% / 1.09090909)',
      },
      12: {
        width: 'calc(100% / 1)',
      },
    },

    noGutters: {
      true: {
        paddingBottom: '0',
      },
      false: {
        paddingBottom: '15px',
      },
    },
  },

  defaultVariants: {
    noGutters: 'false',
  },
});
