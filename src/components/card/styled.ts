/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { lighten } from 'polished';

import Button from '../button';

const VELOCITY = '700ms';
const BEZIER_CURVE = 'cubic-bezier(0.19, 1, 0.22, 1)';

export const CardWrapper = styled.article<{ imageUrl: string }>(({ theme, imageUrl }: any) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  overflow: 'hidden',
  padding: '1rem',
  width: '100%',
  textAlign: 'center',
  color: 'whitesmoke',
  boxShadow: `0 1px 1px rgba(0,0,0,0.1),
    0 2px 2px rgba(0,0,0,0.1),
    0 4px 4px rgba(0,0,0,0.1),
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1)`,

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '110%',
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    transition: `transform calc(${VELOCITY} * 1.5) ${BEZIER_CURVE}`,
    pointerEvents: 'none',
    backgroundImage: `url(${imageUrl})`,
  },

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',
    pointerEvents: 'none',
    backgroundImage: `linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    )`,
    transform: 'translateY(-50%)',
    transition: `transform calc(${VELOCITY} * 2) ${BEZIER_CURVE}`,
  },
  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    height: '350px',
  },

  [`@media (hover: hover) and (min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    '&:after': {
      transform: 'translateY(0)',
    },

    '&:hover, &:focus-within': {
      alignItems: 'center',

      '&:before': {
        transform: 'translateY(-4%)',
      },
      '&:after': { transform: 'translateY(-50%)' },

      ' .content': {
        transform: 'translateY(0)',

        '> *:not(.title)': {
          opacity: 1,
          transform: 'translateY(0)',
          transitionDelay: `calc(${VELOCITY} / 8)`,
        },
      },
    },

    '&:focus-within': {
      '&:before, &:after, .content, .content > *:not(.title)': {
        transitionDuration: '0s',
      },
    },
  },
}));

export const CardBody = styled.div`
  /* font-family: var(--font-serif); */
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
`;

export const CardTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;
`;

export const CardContent = styled.div(({ theme }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  transition: `transform ${VELOCITY} ${BEZIER_CURVE}`,
  zIndex: 1,

  '> * + *': {
    marginTop: '1rem',
  },

  [`@media(min-width: ${theme.dimensions.breakpoints.lg}px)`]: {
    transform: 'translateY(calc(100% - 4.5rem))',

    '> *:not(.title)': {
      opacity: 0,
      transform: 'translateY(1rem)',
      transition: `transform ${VELOCITY} ${BEZIER_CURVE}, opacity ${VELOCITY} ${BEZIER_CURVE}`,
    },
  },
}));

export const CardButton = styled(Button)({
  cursor: 'pointer',
  marginTop: '1.5rem',
  padding: '0.75rem 1.5rem',
  fontSize: '0.65rem',
  fontWeight: 'bold',
  letterSpacing: '0.025rem',
  textTransform: 'uppercase',
  color: 'white !important',
  backgroundColor: 'black',
  border: 'none',

  '&:hover': {
    backgroundColor: lighten(0.3, '#000'),
  },

  '&:focus': {
    outline: '1px dashed yellow',
    outlineOffset: '3px',
  },
});
