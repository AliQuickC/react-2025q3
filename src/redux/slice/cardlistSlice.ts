import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GamesData, ICardListState } from '../../Types/types';
import { FIRST_PAGE } from '../../const/const';

export const initialState: ICardListState = {
  cardListData: {
    haveData: true,
    games: [],
    count: 0,
    responseOk: false,
    currentPage: FIRST_PAGE,
  },
  item: null,
  selectItems: [],
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
    cardListRequestOn: (
      state: ICardListState,
      action: PayloadAction<string | null>
    ) => {
      state.cardListData.currentPage = action.payload;
      state.cardListData.haveData = false;
    },
    setCardDetails: (
      state: ICardListState,
      action: PayloadAction<string | null>
    ) => {
      state.item = action.payload;
    },
    selectItem: (state: ICardListState, action: PayloadAction<number>) => {
      state.selectItems.push(action.payload);
    },
    unSelectItem: (state: ICardListState, action: PayloadAction<number>) => {
      const findItem = state.selectItems.indexOf(action.payload);
      if (findItem !== -1) {
        state.selectItems.splice(findItem, 1);
      }
    },
    unSelectAllItems: (state: ICardListState) => {
      state.selectItems = [];
    },
  },
});

export const actions = cardListSlice.actions;

export default cardListSlice.reducer;
