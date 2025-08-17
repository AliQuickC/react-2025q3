import '../index.sass';
import s from './global-not-found.module.sass';
import type { JSX } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import NotFoundImage from './error404.jpg';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';

export default function GlobalNotFound(): JSX.Element {
  const t = useTranslations('NotFoundPage');

  return (
    <NextIntlClientProvider>
      <html lang="en">
        <body>
          <div className={s.errorSection}>
            <div className={`container ${s.errorPageContainer}`}>
              <h2 className="visually-hidden">Error 404</h2>
              <div>
                <span>{t('return')}: </span>
                <Link className={s.backToHomeButton} href="/">
                  {' '}
                  {t('homebtn')}
                </Link>
              </div>
              <Image
                className={s.img404}
                src={NotFoundImage}
                alt="error404"
                priority={true}
              />
              <div className={s.localSwitcher}>
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
