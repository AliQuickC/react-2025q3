import './App.sass';
import React from 'react';
import type { IGame, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import { ErrorButton } from './components/ErrorButton/ErrorButton';

export const storeKEY = 'module1';

type IProps = object;
type IState = {
  globalState: IGlobalState;
  isError: boolean;
};

const getFindWord = (): string => {
  const LocStor = localStorage.getItem(storeKEY);
  if (!LocStor) {
    localStorage.setItem(storeKEY, '');
  }

  const word = localStorage.getItem(storeKEY) as string;
  return word;
};

const initialState: IGlobalState = {
  haveData: false,
  starships: [],
  responseOk: false,
  findWord: getFindWord(),
};

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { globalState: initialState, isError: false };
  }

  setFindWord = (findWord: string) => {
    this.setState((prev) => ({ ...prev, findWord }));
  };

  setCards = (starships: IGame[], responseOk: boolean) => {
    this.setState((prev) => ({
      ...prev,
      haveData: true,
      starships,
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
          cardsState={this.state.globalState}
          switchHaveData={this.switchHaveData}
          setFindWord={this.setFindWord}
          setCards={this.setCards}
        />
        <Results cardsState={this.state.globalState} setCards={this.setCards} />
        <ErrorButton />
      </>
    );
  }
}

export default App;
