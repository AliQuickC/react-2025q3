import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import { initialState } from '../../const/const';
import userEvent from '@testing-library/user-event';
import { mocRequestFindGames, mocRequestGames } from '../../../__tests__/mock';

const mocSwitchHaveData = vi.fn();
const mocSetGameList = vi.fn();
const mocSetFindWord = vi.fn();
const mockWord1 = 'star wars';
const mockWord2 = 'find word';

describe('Rendering Tests', () => {
  test('Renders search input and search button', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const searchInput = screen.queryByPlaceholderText(/find.../i);
    const searchButton = screen.queryByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('Displays previously saved search term from localStorage on mount', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: mockWord1 }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
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
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    expect(searchInput.value).toBe('');
  });
});

describe('User Interaction Tests', () => {
  beforeEach(() => {
    mocRequestFindGames.mockClear();
    mocSetGameList.mockClear();
  });

  test('User input, Updates input value when user types', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    await user.type(searchInput, mockWord2);
    expect(searchInput.value).toBe(mockWord2);
  });

  test('Saves search term to localStorage when search button is clicked', () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.queryByRole(
      'button'
    ) as HTMLButtonElement;

    user.type(searchInput, mockWord2);
    user.click(searchButton);

    waitFor(() => {
      expect(mocSetFindWord).toHaveBeenCalledTimes(1);
      expect(mocSetFindWord).toHaveBeenCalledWith(mockWord2);
    });
  });

  test('Trims whitespace from search input before saving', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.queryByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, '  ' + mockWord2 + '   ');
    await user.click(searchButton);

    waitFor(() => {
      expect(mocSetFindWord).toHaveBeenCalledWith(mockWord2);
    });
  });

  test('Triggers search callback with correct parameters, search word missing', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.queryByRole(
      'button'
    ) as HTMLButtonElement;

    await user.clear(searchInput);
    await user.click(searchButton);

    expect(mocRequestGames).toHaveBeenCalledTimes(1);
    expect(mocRequestGames).toHaveBeenCalledWith(mocSetGameList);
  });

  test('Triggers search callback with correct parameters, search word present', async () => {
    render(
      <Search
        globalState={{ ...initialState, findWord: '' }}
        switchHaveData={mocSwitchHaveData}
        setFindWord={mocSetFindWord}
        setGameList={mocSetGameList}
      />
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.queryByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, mockWord2);
    await user.click(searchButton);

    expect(mocRequestFindGames).toHaveBeenCalledTimes(1);
    expect(mocRequestFindGames).toHaveBeenCalledWith(mocSetGameList, mockWord2);
  });
});
