import type { IGlobalState } from '../Types/types';
import { getFromLSFindWord } from '../utils/ls';

export const storeKEY = 'module1';

export const initialState: IGlobalState = {
  haveData: false,
  games: [],
  count: 0,
  responseOk: false,
  findWord: getFromLSFindWord(),
};
