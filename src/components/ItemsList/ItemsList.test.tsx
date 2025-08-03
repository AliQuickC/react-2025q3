import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ItemsList from './ItemsList';
import { notDataMessage, responseErrorMessage } from '../../const/const';
import {
  games12,
  games20,
  mockCardListData,
  mocRequestFindGames,
  mocRequestGames,
} from '../../../__tests__/mock';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const mocSetGameList = vi.fn();

describe('Rendering Tests', () => {
  beforeEach(() => {
    mocRequestFindGames.mockClear();
    mocSetGameList.mockClear();
  });

  test('Renders correct number of items when data is provided, loading states', () => {
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData, games: games20 }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByTestId('card-element')).toHaveLength(20);

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData, games: games12 }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByTestId('card-element')).toHaveLength(12);
  });

  test('displayed, "no results" message when data array is empty', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData, games: [] }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByText(new RegExp(notDataMessage))).toBeInTheDocument();
  });

  test('Shows loading state while fetching data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData, haveData: false }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByAltText(/loader.../i)).toBeInTheDocument();
    waitFor(() => {
      expect(screen.queryByAltText('loader...')).not.toBeInTheDocument();
    });
  });

  test('running api with correct parameters, search word missing', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    waitFor(() => {
      expect(mocRequestGames).toHaveBeenCalledTimes(1);
      expect(mocRequestGames).toHaveBeenCalledWith(mocSetGameList, null);
    });
  });

  test('running api with correct parameters, search word present', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    waitFor(() => {
      expect(mocRequestFindGames).toHaveBeenCalledTimes(1);
      expect(mocRequestFindGames).toHaveBeenCalledWith(
        mocSetGameList,
        'star wars',
        null
      );
    });
  });

  test('response fail', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            cardListData={{ ...mockCardListData, responseOk: false }}
            setGameList={mocSetGameList}
            lsWord={''}
          />
        </Provider>
      </BrowserRouter>
    );

    waitFor(() => {
      expect(screen.queryByAltText(responseErrorMessage)).toBeInTheDocument();
    });
  });
});
