import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchTransactionData = createAsyncThunk('data/fetchTransactionData', async (transactionId) => {
    // sample id
    // 15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521
  try {
    const response = await fetch(`https://mempool.space/api/tx/${transactionId}`);
    const transactionData = await response.json();
    console.log(transactionData);
    return transactionData;
  } catch (error) {
    throw error;
  }
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

// Later, dispatch the thunk as needed in the app
// dispatch(fetchTransactionData(transactionId))