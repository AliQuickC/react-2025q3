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

    expect(screen.getByTestId('header-element')).toBeInTheDocument();
    expect(screen.getByTestId('results-element')).toBeInTheDocument();
    expect(screen.getByTestId('footer-element')).toBeInTheDocument();
  });
});
