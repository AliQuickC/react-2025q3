import s from './Footer.module.sass';
import type { JSX } from 'react';
import ErrorButton from '../ErrorButton/ErrorButton';
import Link from 'next/link';

function Footer(): JSX.Element {
  return (
    <footer className={'footer'} data-testid="footer-element">
      <div className={`container ${s.footerContainer}`}>
        <ErrorButton />
        <Link className={'app-button'} href="/about">
          About page
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
