import { type JSX } from 'react';
import TopControls from '../../TopControls/TopControls';
import Results from '../../Results/Results';
import Footer from '../../Footer/Footer';

export default function GamesPage(): JSX.Element {
  return (
    <>
      <TopControls />
      <Results />
      <Footer />
    </>
  );
}
