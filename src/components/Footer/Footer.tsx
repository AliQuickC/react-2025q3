import s from './Footer.module.sass';
import type { JSX } from 'react';
import ErrorButton from '../ErrorButton/ErrorButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function Footer(): JSX.Element {
  const t = useTranslations('FooterButtons');

  return (
    <footer className={'footer'} data-testid="footer-element">
      <div className={`container ${s.footerContainer}`}>
        <ErrorButton />
        <Link className={'app-button'} href="/about">
          {t('about')}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
