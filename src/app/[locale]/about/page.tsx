import s from './AboutPage.module.sass';
import * as React from 'react';
import { type JSX } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';

export default function About(): JSX.Element {
  const t = useTranslations('AboutPage');

  return (
    <div>
      <div className={`container `}>
        <h2>{t('header')}</h2>
        <p>
          <span>{t('author')}: </span>
          <span className={s.authorName}>Alekhin Aleksandr</span>
        </p>
        <p>
          <span>{t('course')}: </span>
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noreferrer"
          >
            RS School React
          </a>
        </p>
        <Link className={`${s.homeButton} app-button`} href="/">
          {t('homebtn')}
        </Link>

        <div className={s.localSwitcher}>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
