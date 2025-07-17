import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Results from './Results';
import { mocGlobalState } from '../../../__tests__/mock';

const mocSetGameList = vi.fn();

describe('Rendering Tests', () => {
  test('Render, have data', () => {
    render(
      <Results globalState={mocGlobalState} setGameList={mocSetGameList} />
    );

    expect(screen.queryByTestId('item-list-element')).toBeInTheDocument();
  });

  test("Render, don't have data", () => {
    render(
      <Results
        globalState={{ ...mocGlobalState, haveData: false }}
        setGameList={mocSetGameList}
      />
    );

    expect(screen.getByAltText('loader...')).toBeInTheDocument();
  });
});
