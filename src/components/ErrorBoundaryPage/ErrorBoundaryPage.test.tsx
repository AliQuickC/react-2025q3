import { render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import ErrorBoundaryPage from './ErrorBoundaryPage';

test('ErrorBoundaryPage Render, loading states', () => {
  render(<ErrorBoundaryPage />);

  waitFor(() => {
    expect(
      screen.getByText(/An error occurred while executing the application/i)
    ).toBeInTheDocument();
  });
});
