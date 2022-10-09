import { DEFAULT_THEME } from '@constants';
import { Theme } from '@enums';
import { createReducer } from '@reduxjs/toolkit';
import { toggleTheme } from './actions';

export const themeReducer = createReducer(DEFAULT_THEME, {
  [toggleTheme.type]: (state: Theme) =>
    state === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
});
