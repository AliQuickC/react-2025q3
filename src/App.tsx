import './App.sass';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { useState, type JSX } from 'react';
import type { State } from './types/types';

function App(): JSX.Element {
  const [state, setState] = useState<State>({
    searchTerm: '',
    countrySort: 'desc',
  });

  return (
    <>
      <Header state={state} setState={setState} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
