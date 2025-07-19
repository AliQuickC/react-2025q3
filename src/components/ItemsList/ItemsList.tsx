import * as React from 'react';
import { Loader } from '../Loader/Loader';
import type { IGame, IGlobalState, SetGameList } from '../../Types/types';
import { requestFindGames, requestGames } from '../../api/api';
import s from './ItemsList.module.sass';
import { ItemHeader } from '../Item/ItemHeader';
import { Item } from '../Item/Item';
import { responseErrorMessage } from '../../const/const';

interface IProps {
  globalState: IGlobalState;
  setGameList: SetGameList;
}
type State = object;
export class ItemsList extends React.Component<IProps, State> {
  componentDidMount() {
    const findWord = this.props.globalState.findWord;

    if (findWord === '') {
      requestGames(this.props.setGameList);
    } else {
      requestFindGames(this.props.setGameList, findWord);
    }
  }

  render() {
    if (this.props.globalState.haveData) {
      let gameItems: React.JSX.Element[] | React.JSX.Element;

      if (this.props.globalState.responseOk) {
        gameItems = this.props.globalState.games.map((game: IGame) => {
          return <Item key={game.id} itemData={game} />;
        });
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
}
