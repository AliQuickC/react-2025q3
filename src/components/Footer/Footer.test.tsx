import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

test('Footer Render', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  expect(
    screen.queryByRole('link', { name: 'About page' })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: 'generate throw' })
  ).toBeInTheDocument();
});
