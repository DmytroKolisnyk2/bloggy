import { useAppDispatch } from '@hooks';
import { toggleTheme } from 'store/theme';
import { ThemeSwitchInner } from './styles';

export function ThemeSwitch() {
  const dispatch = useAppDispatch();

  return (
    <ThemeSwitchInner theme={null} onChange={() => dispatch(toggleTheme())} />
  );
}
