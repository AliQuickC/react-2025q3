import { useActions } from '../../redux/useActions';
import s from './SelectedItems.module.sass';

type Props = {
  selectedElements: number;
};

export function SelectedItems(props: Props) {
  const { unSelectAllItems } = useActions();

  return (
    <div className={s.selectedItems}>
      <button
        className={'app-button'}
        onClick={() => {
          unSelectAllItems();
        }}
      >
        Unselect all
      </button>
      <p>
        <span>Selected elements: </span>
        <span>{props.selectedElements}</span>
      </p>
      <button className={'app-button'}>Download</button>
    </div>
  );
}
