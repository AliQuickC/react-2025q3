import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from './slice/cardlistSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
