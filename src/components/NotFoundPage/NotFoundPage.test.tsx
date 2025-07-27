import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

test('Not found page Render', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );

  expect(screen.queryByRole('link', { name: 'Home page' })).toBeInTheDocument();
  expect(screen.queryByText(/return to/i)).toBeInTheDocument();
  expect(screen.queryByAltText('error404')).toBeInTheDocument();
});
