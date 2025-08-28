import { type JSX } from 'react';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { Results } from '../Results/Results';

export function Main(): JSX.Element {
  return (
    <main className={'section main'}>
      <div className={'container'}>
        <Suspense fallback={<Loader />}>
          <Results />
        </Suspense>
      </div>
    </main>
  );
}
