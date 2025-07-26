import './App.sass';
import { useState, type JSX } from 'react';
import type { GamesData, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import { initialState } from './const/const';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
  const [state, setState] = useState<IGlobalState>(initialState);

  const setGameList = (gamesData: GamesData, responseOk: boolean) => {
    setState((prev) => ({
      ...prev,
      haveData: true,
      count: gamesData.count,
      games: gamesData.results,
      responseOk,
    }));
  };

  const onSearch = () => {
    setState((prev) => ({ ...prev, haveData: false }));
  };

  return (
    <>
      <TopControls globalState={state} onSearch={onSearch} />
      <Results globalState={state} setGameList={setGameList} />
      <Footer />
    </>
  );
}

export default App;
