import './App.sass';
import React from 'react';
import type { GamesData, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import { ErrorButton } from './components/ErrorButton/ErrorButton';
import { initialState, storeKEY } from './const/const';

type IProps = object;
type IState = IGlobalState;

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = initialState;
  }

  setFindWord = (findWord: string) => {
    localStorage.setItem(storeKEY, findWord);
    this.setState((prev) => ({ ...prev, findWord }));
  };

  setGameList = (gamesData: GamesData, responseOk: boolean) => {
    this.setState((prev) => ({
      ...prev,
      haveData: true,
      count: gamesData.count,
      games: gamesData.results,
      responseOk,
    }));
  };

  switchHaveData = (haveData: boolean) => {
    this.setState((prev) => ({ ...prev, haveData }));
  };

  render() {
    return (
      <>
        <TopControls
          globalState={this.state}
          switchHaveData={this.switchHaveData}
          setFindWord={this.setFindWord}
          setGameList={this.setGameList}
        />
        <Results globalState={this.state} setGameList={this.setGameList} />
        <ErrorButton />
      </>
    );
  }
}

export default App;
