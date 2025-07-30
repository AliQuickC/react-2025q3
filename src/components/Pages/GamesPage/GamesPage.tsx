import { useEffect, useState, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import type { GamesData, IGlobalState } from '../../../Types/types';
import { FIRST_PAGE, initialState, storeKEY } from '../../../const/const';
import TopControls from '../../TopControls/TopControls';
import Results from '../../Results/Results';
import Footer from '../../Footer/Footer';

function GamesPage(): JSX.Element {
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

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');
  const item = searchParams.get('item');

  useEffect(() => {
    setState((prev) => {
      return {
        ...prev,
        item,
      };
    });
  }, [item]);

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
      <TopControls lsWord={lsWord} />
      <Results globalState={state} setGameList={setGameList} lsWord={lsWord} />
      <Footer />
    </>
  );
}

export default GamesPage;
