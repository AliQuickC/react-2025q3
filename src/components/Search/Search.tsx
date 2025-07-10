import React from 'react';
import s from './Search.module.sass';
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

interface IState {
  findWord: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { findWord: '' };
  }

  componentDidMount() {
    this.setState({ findWord: this.props.cardsState.findWord });
  }

  render() {
    return (
      <div className={s.search}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.findWord}
          onChange={(event) => {
            this.setState({ findWord: event.target.value });
            this.props.setFindWord(this.state.findWord);
          }}
        />
        <button className={s.findButton}></button>
      </div>
    );
  }
}

export default Search;
