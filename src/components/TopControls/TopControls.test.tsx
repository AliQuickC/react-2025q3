import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { mocGlobalState } from '../../../__tests__/mock';
import TopControls from './TopControls';

const moconSearch = vi.fn();
const mocSetFindWord = vi.fn();

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <TopControls
        globalState={mocGlobalState}
        onSearch={moconSearch}
        setFindWord={mocSetFindWord}
      />
    );

    expect(screen.queryByTestId('header-element')).toBeInTheDocument();
    expect(screen.queryByTestId('search-element')).toBeInTheDocument();
  });
});
