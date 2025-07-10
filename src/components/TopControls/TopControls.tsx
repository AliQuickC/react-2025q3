import React from 'react';
import s from './TopControls.module.sass';
import Search from '../Search/Search';
import type {
  IGlobalState,
  SetCards,
  setFindWord,
  switchHaveData,
} from '../../Types/types';

interface IProps {
  switchHaveData: switchHaveData;
  setCards: SetCards;
  setFindWord: setFindWord;
  cardsState: IGlobalState;
}

class TopControls extends React.Component<IProps> {
  render() {
    return (
      <header className={s.header}>
        <div className={`container ${s.headerContainer} `}>
          <Search
            cardsState={this.props.cardsState}
            switchHaveData={this.props.switchHaveData}
            setFindWord={this.props.setFindWord}
            setCards={this.props.setCards}
          />
        </div>
      </header>
    );
  }
}

export default TopControls;
