import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { mocGlobalState } from '../../../__tests__/mock';
import TopControls from './TopControls';

const mocSwitchHaveData = vi.fn();
const mocSetGameList = vi.fn();
const mocSetFindWord = vi.fn();

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <TopControls
        globalState={mocGlobalState}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    expect(screen.queryByTestId('header-element')).toBeInTheDocument();
    expect(screen.queryByTestId('search-element')).toBeInTheDocument();
  });
});
