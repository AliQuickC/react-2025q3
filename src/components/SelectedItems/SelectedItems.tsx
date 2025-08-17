import s from './SelectedItems.module.sass';
import { useActions } from '../../redux/useActions';
import { useCardList } from '../../redux/useAppSelector';
import { downloadHandler } from './downloadHandler';
import { useTranslations } from 'next-intl';

type Props = {
  selectedElements: number;
};

export function SelectedItems(props: Props) {
  const { unSelectAllItems } = useActions();
  const { selectItems } = useCardList();

  const t = useTranslations('SelectedPanel');

  return (
    <div className={s.selectedItems}>
      <button
        className={'app-button'}
        onClick={() => {
          unSelectAllItems();
        }}
      >
        {t('unselectallbtn')}
      </button>
      <p>
        <span>{t('selected')}: </span>
        <span data-testid="select-item-count">{props.selectedElements}</span>
      </p>
      <button
        className={'app-button'}
        onClick={() => {
          downloadHandler(selectItems);
        }}
      >
        {t('downloadbtn')}
      </button>
    </div>
  );
}
