import React from 'react';
import s from './TopControls.module.sass';
import Search from '../Search/Search';
import type {
  IGlobalState,
  setFindWord,
  SetGameList,
  switchHaveData,
} from '../../Types/types';

interface IProps {
  switchHaveData: switchHaveData;
  setGameList: SetGameList;
  setFindWord: setFindWord;
  globalState: IGlobalState;
}

class TopControls extends React.Component<IProps> {
  render() {
    return (
      <header className={s.header}>
        <div className={`container ${s.headerContainer} `}>
          <Search
            globalState={this.props.globalState}
            switchHaveData={this.props.switchHaveData}
            setFindWord={this.props.setFindWord}
            setGameList={this.props.setGameList}
          />
        </div>
      </header>
    );
  }
}

export default TopControls;
