import { useEffect, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { storeKEY } from '../../../const/const';
import TopControls from '../../TopControls/TopControls';
import Results from '../../Results/Results';
import Footer from '../../Footer/Footer';
import { useActions } from '../../../redux/useActions';

export default function GamesPage(): JSX.Element {
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);
  const { setCardDetails } = useActions();

  const [searchParams] = useSearchParams();
  // const page = searchParams.get('page');
  const search = searchParams.get('search');
  const item = searchParams.get('item');

  useEffect(() => {
    setCardDetails(item);
  }, [item, setCardDetails]);

  useEffect(() => {
    if (lsWord !== (search || '')) {
      setLSWord(search || '');
    }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <TopControls lsWord={lsWord} />
      <Results />
      <Footer />
    </>
  );
}
