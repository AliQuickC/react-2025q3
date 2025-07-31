import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GamesData, ICardListState } from '../../Types/types';
import { FIRST_PAGE } from '../../const/const';

export const initialState: ICardListState = {
  cardListData: {
    haveData: false,
    games: [],
    count: 0,
    responseOk: false,
    currentPage: FIRST_PAGE,
  },
  item: null,
};

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    setCardList: (
      state: ICardListState,
      action: PayloadAction<{
        gamesData: GamesData;
        responseOk: boolean;
      }>
    ) => {
      state.cardListData.count = action.payload.gamesData.count;
      state.cardListData.games = action.payload.gamesData.results;
      state.cardListData.responseOk = action.payload.responseOk;
      state.cardListData.haveData = true;
    },
    SetFindParams: (
      state: ICardListState,
      action: PayloadAction<{
        currentPage: string | null;
        haveData: boolean;
      }>
    ) => {
      state.cardListData.currentPage = action.payload.currentPage;
      state.cardListData.haveData = action.payload.haveData;
    },
    setCardDetails: (
      state: ICardListState,
      action: PayloadAction<string | null>
    ) => {
      state.item = action.payload;
    },
  },
});

export const actions = cardListSlice.actions;

export default cardListSlice.reducer;
