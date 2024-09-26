import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const baseUrl = 'https://mempool.space/api';

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const fetchTransactionData = createAsyncThunk('data/fetchTransactionData', async (transactionId) => {
  // Combine fetches using Promise.all
  const [transactionData, pendingTransactionTime, conversionData] = await Promise.all([
    getData(`${baseUrl}/tx/${transactionId}`),
    getData(`${baseUrl}/v1/transaction-times?txId[]=${transactionId}`),
    getData(`${baseUrl}/v1/prices`)
  ]);

  return { transactionData, pendingTransactionTime, conversionData}; 
});

const transactionDataSlice = createSlice({
  name: 'transactionData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTransactionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = transactionDataSlice.actions;
export default transactionDataSlice.reducer;

