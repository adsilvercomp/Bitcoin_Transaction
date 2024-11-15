import { configureStore } from '@reduxjs/toolkit';
import transactionDataSlice from './transactionDataSlice';

export const store = configureStore({
  reducer: { transactionData: transactionDataSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
