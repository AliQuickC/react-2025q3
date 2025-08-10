import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Results from './Results';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Results />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('results-element')).toBeInTheDocument();
  });
});
