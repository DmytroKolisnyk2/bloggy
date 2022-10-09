import type { Theme } from '@enums';
import { createAction } from '@reduxjs/toolkit';
import { ThemeActions } from './action-types';

export const toggleTheme = createAction<Theme>(ThemeActions.TOGGLE_THEME);
