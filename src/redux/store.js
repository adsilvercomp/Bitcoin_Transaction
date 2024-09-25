import { configureStore } from '@reduxjs/toolkit';
import transactionDataSlice from './transactionDataSlice';

export const store = configureStore({
  reducer: {transactionData: transactionDataSlice},
});