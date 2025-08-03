import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CardDetails from './CardDetails';

describe('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails item={'1'} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByRole('button', { name: 'close' })).toBeInTheDocument();
  });

  test("Render, don't have data", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CardDetails item={'1'} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByAltText('loader...')).toBeInTheDocument();
  });
});
