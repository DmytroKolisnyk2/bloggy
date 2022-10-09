import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const articleWrapper = ({ spaces, colors }: ThemeType) => css`
  padding: ${spaces.xs} ${spaces.md} ${spaces.lg};
  margin-bottom: ${spaces.md};
  background-color: ${colors.body};
  border-radius: 10px;
`;

export const link = ({ spaces, fontWeights, transitions }: ThemeType) => css`
  margin-left: ${spaces.sm};
  text-decoration: none;
  font-weight: ${fontWeights.h5};
  border-bottom: 2px solid transparent;
  transition: ${transitions.duration.standard} linear;
  cursor: pointer;
  &:hover {
    border-color: inherit;
  }
`;
export const commentWrapper = ({ spaces }: ThemeType) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin-right: ${spaces.sm};
  & span {
    margin-right: ${spaces.xs};
  }
`;
export const controlsWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
