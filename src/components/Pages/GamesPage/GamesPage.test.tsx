import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GamesPage from './GamesPage.tsx';
import { Provider } from 'react-redux';
import store from '../../../redux/store.ts';

describe('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <GamesPage />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByTestId('header-element')).toBeInTheDocument();
    expect(screen.queryByTestId('results-element')).toBeInTheDocument();
    expect(screen.queryByTestId('footer-element')).toBeInTheDocument();
  });
});
