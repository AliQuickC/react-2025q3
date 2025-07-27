import './App.sass';
import { useEffect, useState, type JSX } from 'react';
import type { GamesData, IGlobalState } from './Types/types';
import TopControls from './components/TopControls/TopControls';
import Results from './components/Results/Results';
import { FIRST_PAGE, initialState, storeKEY } from './const/const';
import Footer from './components/Footer/Footer';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

function App(): JSX.Element {
  const [state, setState] = useState<IGlobalState>(initialState);
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);

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

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  useEffect(() => {
    if (lsWord !== (search || '')) {
      setLSWord(search || '');
    }
    setState((prev) => {
      return {
        ...prev,
        currentPage: FIRST_PAGE,
        haveData: false,
      };
    });
    setState((prev) => {
      return { ...prev, currentPage: page, haveData: false };
    });
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  return (
    <>
      <TopControls globalState={state} onSearch={onSearch} />
      <Results globalState={state} setGameList={setGameList} lsWord={lsWord} />
      <Footer />
    </>
  );
}

export default App;
