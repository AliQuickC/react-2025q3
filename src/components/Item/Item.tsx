import type { JSX } from 'react';
import type { IGame } from '../../Types/types';
import s from './Item.module.sass';
import { useSearchParams } from 'react-router-dom';

type Props = {
  itemData: IGame;
};
export function Item(props: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className={s.Item + ' unselectable'}
      data-testid="card-element"
      onClick={() => {
        const starShipId = searchParams.get('item');
        if (!starShipId) {
          setSearchParams((params) => {
            params.set('item', props.itemData.id.toString());
            return params;
          });
        }
      }}
    >
      <div className={s.GameName}>{props.itemData.name}</div>
      <div className={s.ReleaseDate}>{props.itemData.released}</div>
    </div>
  );
}
