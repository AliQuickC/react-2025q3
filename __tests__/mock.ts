import { vi } from 'vitest';
import * as api from '../src/api/api';
import type { IGlobalState } from '../src/Types/types';

export const mocGlobalState: IGlobalState = {
  haveData: true,
  games: [],
  count: 0,
  responseOk: true,
  findWord: '',
};

export const mocRequestGames = vi.spyOn(api, 'requestGames');
export const mocRequestFindGames = vi.spyOn(api, 'requestFindGames');
