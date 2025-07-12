import React from 'react';
import s from './Search.module.sass';
import type {
  IGlobalState,
  setFindWord,
  SetGameList,
  switchHaveData,
} from '../../Types/types';
import { requestFindGames, requestGames } from '../../api/api';

interface IProps {
  switchHaveData: switchHaveData;
  setGameList: SetGameList;
  setFindWord: setFindWord;
  globalState: IGlobalState;
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
    this.setState({ findWord: this.props.globalState.findWord });
  }

  findHandler = () => {
    const findWord = this.state.findWord.trim();
    this.props.setFindWord(findWord);
    this.props.switchHaveData(false);

    if (findWord === '') {
      requestGames(this.props.setGameList);
    } else {
      requestFindGames(this.props.setGameList, findWord);
    }
  };

  render() {
    return (
      <div className={s.search}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.findWord}
          onChange={(event) => {
            this.setState({ findWord: event.target.value });
          }}
        />
        <button className={s.findButton} onClick={this.findHandler}></button>
      </div>
    );
  }
}

export default Search;
