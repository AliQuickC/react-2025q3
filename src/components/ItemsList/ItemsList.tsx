import { Loader } from '../Loader/Loader';
import type { GamesData, IGame } from '../../Types/types';
import s from './ItemsList.module.sass';
import { ItemHeader } from '../Item/ItemHeader';
import { Item } from '../Item/Item';
import { notDataMessage, responseErrorMessage } from '../../const/const';
import { type JSX } from 'react';
import { useCardList } from '../../redux/useAppSelector';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit/react';
import { getErrorInfo } from '../../utils/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  data: GamesData | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isFetching: boolean;
}

function ItemsList(props: Props): JSX.Element {
  const { selectItems } = useCardList();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  let gameItems: React.JSX.Element[] | React.JSX.Element;

  const closeHandler = () => {
    const params = new URLSearchParams(searchParams.toString());
    const hasItem = params.has('item');

    if (hasItem) {
      params.delete('item');
      router.push(pathname + '?' + params);
    }
  };

  if (props.error) {
    gameItems = <div className={'error-data'}>{getErrorInfo(props.error)}</div>;
  } else if (props.isFetching) {
    return <Loader />;
  } else if (props.data) {
    if (props.data.results.length === 0) {
      gameItems = <div className={s.errorData}>{notDataMessage}</div>;
    } else {
      gameItems = props.data.results.map((game: IGame) => {
        return (
          <Item
            key={game.id}
            itemData={game}
            isSelect={
              selectItems.findIndex((element) => element.id === game.id) !== -1
            }
          />
        );
      });
    }
  } else {
    gameItems = <div className={'error-data'}>{responseErrorMessage}</div>;
  }

  return (
    <div
      className={s.itemsList}
      data-testid="item-list-element"
      onClick={closeHandler}
    >
      <ItemHeader
        itemData={{ description: 'Game', released: 'Release date' }}
      />
      {gameItems}
    </div>
  );
}

export default ItemsList;
