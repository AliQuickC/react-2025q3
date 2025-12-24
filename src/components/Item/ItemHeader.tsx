import type { JSX } from 'react';
import s from './Item.module.sass';

type Props = {
  itemData: {
    description: string;
    released: string;
  };
};

export function ItemHeader(props: Props): JSX.Element {
  return (
    <div className={s.Item + ' unselectable'}>
      <div className={s.GameName}>{props.itemData.description}</div>
      <div className={s.ReleaseDate}>{props.itemData.released}</div>
    </div>
  );
}
