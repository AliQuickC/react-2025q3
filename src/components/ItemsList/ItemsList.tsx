import { Loader } from '../Loader/Loader';
import type { IGame, IGlobalState, SetGameList } from '../../Types/types';
import { requestFindGames, requestGames } from '../../api/api';
import s from './ItemsList.module.sass';
import { ItemHeader } from '../Item/ItemHeader';
import { Item } from '../Item/Item';
import { notDataMessage, responseErrorMessage } from '../../const/const';
import { useEffect, type JSX } from 'react';

interface IProps {
  globalState: IGlobalState;
  setGameList: SetGameList;
}

function ItemsList(props: IProps): JSX.Element {
  useEffect(() => {
    if (props.globalState.haveData) return;

    const findWord = props.globalState.findWord;

    if (findWord === '') {
      requestGames(props.setGameList);
    } else {
      requestFindGames(props.setGameList, findWord);
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.globalState.haveData]);

  if (props.globalState.haveData) {
    let gameItems: React.JSX.Element[] | React.JSX.Element;

    if (props.globalState.responseOk) {
      if (props.globalState.games.length === 0) {
        gameItems = <div className={s.ErrorData}>{notDataMessage}</div>;
      } else {
        gameItems = props.globalState.games.map((game: IGame) => {
          return <Item key={game.id} itemData={game} />;
        });
      }
    } else {
      gameItems = <div className={s.ErrorData}>{responseErrorMessage}</div>;
    }

    return (
      <div className={s.ItemsList} data-testid="item-list-element">
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
