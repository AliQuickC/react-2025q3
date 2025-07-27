import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import About from './About';
import { BrowserRouter } from 'react-router-dom';

test('About page Render', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  expect(screen.queryByRole('link', { name: 'Home page' })).toBeInTheDocument();
  expect(screen.queryByText(/About/i)).toBeInTheDocument();
});
