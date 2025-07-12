import * as React from 'react';
import { Loader } from '../Loader/Loader';
import type { IGame, IGlobalState, SetCards } from '../../Types/types';
import { requestGames } from '../../api/api';
import s from './ItemsList.module.sass';
import { ItemHeader } from '../Item/ItemHeader';
import { Item } from '../Item/Item';

interface IProps {
  globalState: IGlobalState;
  setCards: SetCards;
}
type State = object;
export class ItemsList extends React.Component<IProps, State> {
  componentDidMount() {
    requestGames(this.props.setCards);
  }

  render() {
    if (this.props.globalState.haveData) {
      let gameItems: React.JSX.Element[] | React.JSX.Element;

      if (this.props.globalState.responseOk) {
        gameItems = this.props.globalState.games.map((game: IGame, index) => {
          return <Item key={index} itemData={game} />;
        });
      } else {
        gameItems = (
          <div className={s.ErrorData}>
            Error, failed to get data from server !
          </div>
        );
      }

      return (
        <div className={s.ItemsList}>
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
