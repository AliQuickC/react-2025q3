import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import AboutPage from './AboutPage';
import { BrowserRouter } from 'react-router-dom';

test('About page Render', () => {
  render(
    <BrowserRouter>
      <AboutPage />
    </BrowserRouter>
  );

  expect(screen.queryByRole('link', { name: 'Home page' })).toBeInTheDocument();
  expect(screen.queryByText(/About/i)).toBeInTheDocument();
});
