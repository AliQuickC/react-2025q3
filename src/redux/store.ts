import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from './slice/cardlistSlice';
import detailsReducer from './slice/detailsSlice';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
