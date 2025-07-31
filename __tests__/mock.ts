import { vi } from 'vitest';
import * as api from '../src/api/api';
import type { ICardListData, ICardListState } from '../src/Types/types';

export const mockCardListData: ICardListData = {
  haveData: true,
  games: [],
  count: 0,
  responseOk: true,
  currentPage: '1',
};

export const mocCardListState: ICardListState = {
  cardListData: {
    haveData: true,
    games: [],
    count: 0,
    responseOk: true,
    currentPage: '1',
  },
  item: null,
};

export const mocRequestGames = vi.spyOn(api, 'requestGames');
export const mocRequestFindGames = vi.spyOn(api, 'requestFindGames');
