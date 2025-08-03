import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import TopControls from './TopControls';
import { BrowserRouter } from 'react-router-dom';

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <BrowserRouter>
        <TopControls lsWord={''} />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('header-element')).toBeInTheDocument();
    expect(screen.queryByTestId('search-element')).toBeInTheDocument();
  });
});
