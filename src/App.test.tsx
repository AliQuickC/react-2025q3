import { beforeAll, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from './components/ErrorBoundaryPage/ErrorBoundaryPage.tsx';
import App from './App';
import { storeKEY } from './const/const.ts';

const mockWord2 = 'find word';

describe('Local Storage tests', () => {
  const mockLS: { [key: string]: string } = {};
  mockLS[storeKEY] = 'asd';

  beforeAll(() => {
    Storage.prototype.setItem = vi.fn((key, value) => {
      mockLS[key] = value;
    });
    Storage.prototype.getItem = vi.fn((key) => mockLS[key]);
  });

  test('Local storage write', async () => {
    render(<App />);

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.queryByRole('button', {
      name: 'find',
    }) as HTMLButtonElement;

    expect(searchInput.value).toBe('');

    await user.type(searchInput, mockWord2);
    await user.click(searchButton);

    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(storeKEY, mockWord2);
  });
});

test('Error Boundary Tests, Error button is clicked', async () => {
  render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );

  const user = userEvent.setup();
  const errorButton: HTMLButtonElement = screen.getByRole('button', {
    name: 'generate throw',
  }) as HTMLButtonElement;
  user.click(errorButton);

  await waitFor(() => {
    expect(
      screen.getByText(/An error occurred while executing the application/i)
    ).toBeInTheDocument();
  });
});
