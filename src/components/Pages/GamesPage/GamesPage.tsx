import { useEffect, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import type { GamesData } from '../../../Types/types';
import { FIRST_PAGE, storeKEY } from '../../../const/const';
import TopControls from '../../TopControls/TopControls';
import Results from '../../Results/Results';
import Footer from '../../Footer/Footer';
import { useActions } from '../../../redux/useActions';

export default function GamesPage(): JSX.Element {
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);

  const { setCardDetails, cardListRequestOn, setCardList } = useActions();

  const setGameList = (listData: {
    gamesData: GamesData;
    responseOk: boolean;
  }) => {
    setCardList({
      gamesData: listData.gamesData,
      responseOk: listData.responseOk,
    });
  };

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');
  const item = searchParams.get('item');

  useEffect(() => {
    setCardDetails(item);
  }, [item, setCardDetails]);

  useEffect(() => {
    if (lsWord !== (search || '')) {
      setLSWord(search || '');
      cardListRequestOn(FIRST_PAGE);
    } else {
      cardListRequestOn(page);
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  return (
    <>
      <TopControls lsWord={lsWord} />
      <Results setGameList={setGameList} lsWord={lsWord} />
      <Footer />
    </>
  );
}
