import type { IGlobalState } from '../Types/types';

export const storeKEY = 'module3';

export const FIRST_PAGE = '1';
export const MAX_CARDS_ON_PAGE: number = 20;

export const initialState: IGlobalState = {
  haveData: false,
  games: [],
  count: 0,
  responseOk: false,
  currentPage: '1',
};

export const responseErrorMessage = 'Error, failed to get data from server !';
export const notDataMessage = 'no results';
