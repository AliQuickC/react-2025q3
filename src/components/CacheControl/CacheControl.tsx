'use client';

import s from './CacheControl.module.sass';
import { useCardList } from '../../redux/useAppSelector';
import { useActions } from '../../redux/useActions';
import { useTranslations } from 'next-intl';

export function CacheControl() {
  const { enableCacheGameList, enableCacheGameDetails } = useCardList();
  const { switchCacheGameList, switchCacheGameDetails } = useActions();
  const t = useTranslations('CacheSwitcher');

  return (
    <div>
      <fieldset className={s.controlField + ' unselectable'}>
        <legend>{t('label')}:</legend>
        <label className={s.checkBox}>
          <input
            type="checkbox"
            checked={!enableCacheGameList}
            onChange={() => switchCacheGameList()}
            className={s.checkBox}
          />
          {t('list')}
        </label>
        <label className={s.checkBox}>
          <input
            type="checkbox"
            checked={!enableCacheGameDetails}
            onChange={() => switchCacheGameDetails()}
            className={s.checkBox}
          />
          {t('details')}
        </label>
      </fieldset>
    </div>
  );
}
