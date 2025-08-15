import * as React from 'react';
import GamesPage from '../components/Pages/GamesPage/GamesPage';
import { Providers } from './providers';

export default function Home() {
  return (
    <Providers>
      <GamesPage />
    </Providers>
  );
}
