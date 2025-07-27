import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { mocGlobalState } from '../../../__tests__/mock';
import TopControls from './TopControls';
import { BrowserRouter } from 'react-router-dom';

const moconSearch = vi.fn();

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <BrowserRouter>
        <TopControls globalState={mocGlobalState} onSearch={moconSearch} />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('header-element')).toBeInTheDocument();
    expect(screen.queryByTestId('search-element')).toBeInTheDocument();
  });
});
