import { Theme } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { themeSelector, toggleTheme } from 'store/theme';
import { ThemeSwitchInner } from './styles';

export function ThemeSwitch() {
  const dispatch = useAppDispatch();
  const theme = useTypedSelector(themeSelector);

  return (
    <ThemeSwitchInner
      checked={theme === Theme.LIGHT}
      onChange={() => dispatch(toggleTheme())}
    />
  );
}
