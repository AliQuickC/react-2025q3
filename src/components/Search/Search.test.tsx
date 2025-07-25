import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import { initialState } from '../../const/const';
import userEvent from '@testing-library/user-event';

const moconSearch = vi.fn();
const mocSetSearchWord = vi.fn();
const mockWord1 = 'star wars';
const mockWord2 = 'find word';

describe.skip('Rendering Tests', () => {
  test('Renders search input and search button', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const searchInput = screen.queryByPlaceholderText(/find.../i);
    const searchButton = screen.queryByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('Displays search term', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: mockWord1 }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    expect(searchInput.value).toBe(mockWord1);
  });

  test('Shows empty input when no saved term exists', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    expect(searchInput.value).toBe('');
  });
});

describe.skip('User Interaction Tests', () => {
  beforeEach(() => {
    mocSetSearchWord.mockClear();
    moconSearch.mockClear();
  });

  test('User input, Updates input value when user types', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    await user.type(searchInput, mockWord2);
    expect(searchInput.value).toBe(mockWord2);
  });

  test('Saves search term to localStorage when search button is clicked', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, mockWord2);
    await user.click(searchButton);

    await waitFor(() => {
      expect(mocSetSearchWord).toHaveBeenCalledTimes(1);
      expect(mocSetSearchWord).toHaveBeenCalledWith(mockWord2);
    });
  });

  test('Trims whitespace from search input before saving', async () => {
    const mockStr = '  ' + mockWord2 + '   ';

    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, mockStr);
    await user.click(searchButton);

    await waitFor(() => {
      expect(mocSetSearchWord).toHaveBeenCalledTimes(1);
      expect(moconSearch).toHaveBeenCalledTimes(1);
      expect(mocSetSearchWord).toHaveBeenCalledWith(mockWord2);
      expect(moconSearch).toHaveBeenCalledWith(mockWord2);
    });
  });

  test('Triggers search callback with correct parameters, search word missing', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: 'test-word' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.clear(searchInput);
    await user.click(searchButton);

    await waitFor(() => {
      expect(mocSetSearchWord).toHaveBeenCalledTimes(1);
      expect(moconSearch).toHaveBeenCalledTimes(1);
      expect(mocSetSearchWord).toHaveBeenCalledWith('');
      expect(moconSearch).toHaveBeenCalledWith('');
    });
  });

  test('Triggers search callback with correct parameters, search word present', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        onSearch={moconSearch}
        setSearchWord={mocSetSearchWord}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, mockWord2);
    await user.click(searchButton);

    await waitFor(() => {
      expect(mocSetSearchWord).toHaveBeenCalledTimes(1);
      expect(moconSearch).toHaveBeenCalledTimes(1);
      expect(mocSetSearchWord).toHaveBeenCalledWith(mockWord2);
      expect(moconSearch).toHaveBeenCalledWith(mockWord2);
    });
  });
});
