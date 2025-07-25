import './App.sass';
import { useState, type JSX } from 'react';
import type { GamesData, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { initialState, storeKEY } from './const/const';

function App(): JSX.Element {
  const [state, setState] = useState<IGlobalState>(initialState);

  const setFindWord = (findWord: string) => {
    localStorage.setItem(storeKEY, findWord);
  };

  const setGameList = (gamesData: GamesData, responseOk: boolean) => {
    setState((prev) => ({
      ...prev,
      haveData: true,
      count: gamesData.count,
      games: gamesData.results,
      responseOk,
    }));
  };

  const onSearch = (findWord: string = '') => {
    setState((prev) => ({ ...prev, haveData: false, findWord }));
  };

  return (
    <>
      <TopControls
        globalState={state}
        onSearch={onSearch}
        setFindWord={setFindWord}
      />
      <Results globalState={state} setGameList={setGameList} />
      <ErrorButton />
    </>
  );
}

export default App;
