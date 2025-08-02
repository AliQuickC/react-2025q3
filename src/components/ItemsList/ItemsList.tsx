import { Loader } from '../Loader/Loader';
import type { IGame, SetGameList, ICardListData } from '../../Types/types';
import { requestFindGames, requestGames } from '../../api/api';
import s from './ItemsList.module.sass';
import { ItemHeader } from '../Item/ItemHeader';
import { Item } from '../Item/Item';
import { notDataMessage, responseErrorMessage } from '../../const/const';
import { useEffect, type JSX } from 'react';
import { useCardList } from '../../redux/useAppSelector';

interface IProps {
  cardListData: ICardListData;
  setGameList: SetGameList;
  lsWord: string;
}

function ItemsList(props: IProps): JSX.Element {
  const { selectItems } = useCardList();

  useEffect(() => {
    if (props.cardListData.haveData) return;

    if (props.lsWord === '') {
      requestGames(props.setGameList, props.cardListData.currentPage);
    } else {
      requestFindGames(
        props.setGameList,
        props.lsWord,
        props.cardListData.currentPage
      );
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cardListData.haveData]);

  if (props.cardListData.haveData) {
    let gameItems: React.JSX.Element[] | React.JSX.Element;

    if (props.cardListData.responseOk) {
      if (props.cardListData.games.length === 0) {
        gameItems = <div className={s.errorData}>{notDataMessage}</div>;
      } else {
        gameItems = props.cardListData.games.map((game: IGame) => {
          return (
            <Item
              key={game.id}
              itemData={game}
              isSelect={selectItems.includes(game.id)}
            />
          );
        });
      }
    } else {
      gameItems = <div className={s.errorData}>{responseErrorMessage}</div>;
    }

    return (
      <div className={s.itemsList} data-testid="item-list-element">
        <ItemHeader
          itemData={{ description: 'Game', released: 'Release date' }}
        />
        {gameItems}
      </div>
    );
  }
  return <Loader />;
}

export default ItemsList;
