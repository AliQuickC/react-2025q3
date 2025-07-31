import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Results from './Results';
import { BrowserRouter } from 'react-router-dom';

const mocSetGameList = vi.fn();

describe.skip('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <BrowserRouter>
        <Results setGameList={mocSetGameList} lsWord={''} />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('item-list-element')).toBeInTheDocument();
  });

  test("Render, don't have data", () => {
    render(
      <BrowserRouter>
        <Results setGameList={mocSetGameList} lsWord={''} />
      </BrowserRouter>
    );

    expect(screen.queryByAltText('loader...')).toBeInTheDocument();
  });
});
