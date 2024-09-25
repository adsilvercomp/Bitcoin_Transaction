import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const baseUrl = 'https://mempool.space/api';

const getTransactionData = async (transactionId) => {
  try {
    const response = await axios.get(`${baseUrl}/tx/${transactionId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBtcConversionData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/v1/prices`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPendingTransactionTime = async (transactionId) => {
  try {
    const response = await axios.get(`${baseUrl}/v1/transaction-times`, {
      params: {
        txId: [transactionId], // Pass transaction ID as a parameter within an array
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchTransactionData = createAsyncThunk('data/fetchTransactionData', async (transactionId) => {
  // Combine both fetches using Promise.all
  const [transactionData, pendingTransactionTime, conversionData] = await Promise.all([
    getTransactionData(transactionId),
    getPendingTransactionTime(transactionId),
    getBtcConversionData(),
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
        console.log('testing')
        console.log(action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = transactionDataSlice.actions;
export default transactionDataSlice.reducer;

