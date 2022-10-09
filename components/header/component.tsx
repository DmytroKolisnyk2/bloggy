import { Container } from '@components/primitives/container';
import LanguageButtons from '@components/primitives/language-buttons/component';
import { NavLink } from '@components/primitives/nav-link';
import { ThemeSwitch } from '@components/primitives/theme-switch';
import { PostRoutes, Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export function Header() {
  const { t } = useTranslation();

  return (
    <header css={styles.header}>
      <Container cssExtend={styles.headerContentWrapper}>
        <nav role="navigation">
          <NavLink
            classes={[styles.link]}
            activeCss={styles.activeLink}
            href={Routes.DEFAULT}
          >
            {t('common:header.links.main')}
          </NavLink>
          <NavLink
            classes={[styles.link]}
            activeCss={styles.activeLink}
            href={Routes.POSTS}
          >
            {t('common:header.links.post')}
          </NavLink>
          <NavLink
            classes={[styles.link]}
            activeCss={styles.activeLink}
            href={uniteRoutes(Routes.POSTS, PostRoutes.CREATE)}
          >
            {t('common:header.links.createPost')}
          </NavLink>
        </nav>
        <div css={styles.controlsWrapper}>
          <LanguageButtons />
          <ThemeSwitch />
        </div>
      </Container>
    </header>
  );
}
