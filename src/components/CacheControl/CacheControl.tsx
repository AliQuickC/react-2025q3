import s from './CacheControl.module.sass';
import { useCardList } from '../../redux/useAppSelector';
import { useActions } from '../../redux/useActions';

export function CacheControl() {
  const { isCacheGameList, isCacheGameDetails } = useCardList();
  const { switchCacheGameList, switchCacheGameDetails } = useActions();

  return (
    <div>
      <fieldset className={s.controlField + ' unselectable'}>
        <legend>Disable cache in:</legend>
        <label className={s.checkBox}>
          <input
            type="checkbox"
            checked={!isCacheGameList}
            onChange={() => switchCacheGameList()}
            className={s.checkBox}
          />
          Game list
        </label>
        <label className={s.checkBox}>
          <input
            type="checkbox"
            checked={!isCacheGameDetails}
            onChange={() => switchCacheGameDetails()}
            className={s.checkBox}
          />
          Game details
        </label>
      </fieldset>
    </div>
  );
}
