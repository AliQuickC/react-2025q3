import type { JSX } from 'react';
import type { IGame } from '../../Types/types';
import s from './Item.module.sass';

type Props = {
  itemData: IGame;
};
export function Item(props: Props): JSX.Element {
  return (
    <div className={s.Item + ' unselectable'} data-testid="card-element">
      <div className={s.GameName}>{props.itemData.name}</div>
      <div className={s.ReleaseDate}>{props.itemData.released}</div>
    </div>
  );
}
