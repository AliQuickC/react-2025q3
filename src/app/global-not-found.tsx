import '../index.sass';
import s from './global-not-found.module.sass';
import type { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFoundImage from './error404.jpg';
import { useTranslations } from 'next-intl';

export default function GlobalNotFound(): JSX.Element {
  const t = useTranslations('NotFoundPage');

  return (
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
          </div>
        </div>
      </body>
    </html>
  );
}
