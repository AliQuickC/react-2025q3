'use client';

import { useTranslations } from 'next-intl';
import s from './ErrorButton.module.sass';
import React, { useState } from 'react';

function ErrorButton(): React.JSX.Element {
  const [isError, setIsError] = useState<boolean>(false);
  const t = useTranslations('FooterButtons');

  if (isError) {
    throw new Error('Wrong!!!');
  }

  return (
    <div className={s.errorButton}>
      <button
        className={s.trowButton}
        onClick={() => {
          setIsError(true);
        }}
      >
        {t('error')}
      </button>
    </div>
  );
}

export default ErrorButton;
