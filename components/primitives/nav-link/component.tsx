import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NavLinkProps } from './types';

export function NavLink({
  href,
  activeCss,
  children,
  exact = true,
  classes,
  ...elseProps
}: NavLinkProps) {
  const router = useRouter();
  const isActive = exact
    ? router.asPath === href
    : router.asPath.startsWith(href) || router.asPath.endsWith(href);

  if (isActive) {
    classes.push(activeCss);
  }

  return (
    <Link href={href}>
      <a {...elseProps} css={classes}>
        {children}
      </a>
    </Link>
  );
}
