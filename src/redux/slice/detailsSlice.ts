import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameDetail, GamesDetailData } from '../../Types/types';

export const initialState: GameDetail = {
  detailData: null,
  id: null,
  isLoading: false,
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
        isLoading: boolean;
      }>
    ) => {
      state.detailData = action.payload.detailData;
      state.id = action.payload.id;
      state.isLoading = true;
    },
    detailsRequestOn: (state: GameDetail, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.isLoading = false;
    },
  },
});

export const actions = detailsSlice.actions;

export default detailsSlice.reducer;
