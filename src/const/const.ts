import type { IGlobalState } from '../Types/types';

export const storeKEY = 'module3';

export const initialState: IGlobalState = {
  haveData: false,
  games: [],
  count: 0,
  responseOk: false,
};

export const responseErrorMessage = 'Error, failed to get data from server !';
export const notDataMessage = 'no results';
