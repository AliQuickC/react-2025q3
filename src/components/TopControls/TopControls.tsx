'use client';

import s from './TopControls.module.sass';
import type { JSX } from 'react';
import { CacheControl } from '../CacheControl/CacheControl';
import dynamic from 'next/dynamic';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

const Search = dynamic(() => import('../Search/Search'), {
  ssr: false,
});

function TopControls(): JSX.Element {
  return (
    <header className={s.header} data-testid="header-element">
      <div className={`container ${s.headerContainer} `}>
        <Search />
        <LocaleSwitcher />
        <CacheControl />
      </div>
    </header>
  );
}

export default TopControls;
