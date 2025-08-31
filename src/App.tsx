import './App.sass';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { useState, type JSX } from 'react';
import type { State } from './types/types';
import { GlobalStateContext, initialState } from './constant/constants';

function App(): JSX.Element {
  const [state, setState] = useState<State>(initialState);

  return (
    <>
      <GlobalStateContext value={state}>
        <Header state={state} setState={setState} />
        <Main />
        <Footer />
      </GlobalStateContext>
    </>
  );
}

export default App;
