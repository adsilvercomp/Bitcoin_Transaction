import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const getTransactionData = async (transactionId) => {
  try {
    const response = await fetch(`https://mempool.space/api/tx/${transactionId}`);
    const transactionData = await response.json();
    return transactionData;
  } catch (error) {
    throw error;
  }
}

const getBtcConversionData = async () => {
  try {
    const response = await fetch(`https://mempool.space/api/v1/prices`);
    const conversionData = await response.json();
    return conversionData;
  } catch (error) {
    throw error;
  }
}

const getPendingTransactionTime = async (transactionId) => {
  try {
    const response = await fetch(`https://mempool.space/api/v1/transaction-times?txId[]=${transactionId}`);
    const pendingTransactionTime = await response.json();
    return pendingTransactionTime;
  } catch (error) {
    throw error;
  }
}


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
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = transactionDataSlice.actions;
export default transactionDataSlice.reducer;

