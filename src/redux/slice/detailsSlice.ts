import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameDetail, GamesDetailData } from '../../Types/types';

export const initialState: GameDetail = {
  detailData: null,
  id: null,
  haveData: false,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (
      state: GameDetail,
      action: PayloadAction<{
        detailData: GamesDetailData | null;
        id: number | null;
        haveData: boolean;
      }>
    ) => {
      state.detailData = action.payload.detailData;
      state.id = action.payload.id;
      state.haveData = true;
    },
    detailsRequestOn: (state: GameDetail, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.haveData = false;
    },
  },
});

export const actions = detailsSlice.actions;

export default detailsSlice.reducer;
