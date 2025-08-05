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

    expect(screen.getByTestId('header-element')).toBeInTheDocument();
    expect(screen.getByTestId('search-element')).toBeInTheDocument();
  });
});
