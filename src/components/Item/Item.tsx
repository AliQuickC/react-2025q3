import type { IGame } from '../../Types/types';
import s from './Item.module.sass';

type Props = {
  itemData: IGame;
};
export function Item(props: Props) {
  return (
    <div className={s.Item + ' unselectable'}>
      <div className={s.GameName}>{props.itemData.name}</div>
      <div className={s.ReleaseDate}>{props.itemData.released}</div>
    </div>
  );
}
