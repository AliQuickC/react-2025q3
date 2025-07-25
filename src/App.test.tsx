import { beforeAll, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test.skip('Local storage write', async () => {
    render(<App />);

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole('button', {
      name: 'find',
    });

    expect(searchInput.value).toBe('');

    await user.type(searchInput, mockWord2);
    await user.click(searchButton);

    expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(storeKEY, mockWord2);
  });
});
