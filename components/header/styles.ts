import { css } from '@emotion/react';
import type { Theme } from '@mui/material';

export const link = ({
  fontSizes,
  colors,
  fontWeights,
  spaces,
  transitions,
}: Theme) => css`
  margin-right: ${spaces.xl};
  font-size: ${fontSizes.body1};
  font-weight: ${fontWeights.body1};
  color: ${colors.text};
  cursor: pointer;
  transition: ${transitions.duration.standard} linear;
  border-bottom: 2px solid transparent;
`;

export const activeLink = ({ colors }: Theme) => css`
  border-bottom: 2px solid ${colors.text};
`;
export const header = ({ colors, spaces }: Theme) => css`
  width: 100%;
  padding: ${spaces.lg} 0;
  background-color: ${colors.body};
`;
export const headerContentWrapper = ({ breakpoints }: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpoints.up('sm')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const controlsWrapper = ({ breakpoints, spaces }: Theme) => css`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spaces.sm};
  ${breakpoints.up('sm')} {
    margin-top: 0;
  }
`;
