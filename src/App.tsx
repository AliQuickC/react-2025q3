import './App.sass';
import React from 'react';
import type { GamesData, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import { ErrorButton } from './components/ErrorButton/ErrorButton';

export const storeKEY = 'module1';

type IProps = object;
type IState = IGlobalState;

const getFromLSFindWord = (): string => {
  const LocStor = localStorage.getItem(storeKEY);
  if (!LocStor) {
    localStorage.setItem(storeKEY, '');
  }

  const word = localStorage.getItem(storeKEY) as string;
  return word;
};

const initialState: IGlobalState = {
  haveData: false,
  games: [],
  count: 0,
  responseOk: false,
  findWord: getFromLSFindWord(),
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = initialState;
  }

  setFindWord = (findWord: string) => {
    this.setState((prev) => ({ ...prev, findWord }));
  };

  setCards = (gamesData: GamesData, responseOk: boolean) => {
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
          cardsState={this.state}
          switchHaveData={this.switchHaveData}
          setFindWord={this.setFindWord}
          setCards={this.setCards}
        />
        <Results globalState={this.state} setCards={this.setCards} />
        <ErrorButton />
      </>
    );
  }
}

export default App;
