import { render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import ErrorBoundaryPage from './ErrorBoundaryPage';

test('ErrorBoundary page Render', () => {
  render(<ErrorBoundaryPage />);

  waitFor(() => {
    expect(
      screen.queryByText(/An error occurred while executing the application/i)
    ).toBeInTheDocument();
  });
});
