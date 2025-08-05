import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Results from './Results';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const mocSetGameList = vi.fn();

describe('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Results setGameList={mocSetGameList} lsWord={''} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('item-list-element')).toBeInTheDocument();
  });
});
