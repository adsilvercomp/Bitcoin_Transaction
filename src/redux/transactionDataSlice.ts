import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TransactionData {
  txid: string;
  weight: string;
  size: number;
  fee: number;
  status: TransactionStatus | null;
  vin: Vin[] | null;
  vout: Vout[] | null;
}

interface TransactionStatus {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

interface ConversionData {
  time: number;
  USD: number;
}

interface Vin {
  txid: number;
  vout: number;
  prevout: { value: number };
}

interface Vout {
  value: number;
}

interface TransactionDataState {
  loading: boolean;
  data: {
    transactionData: TransactionData;
    pendingTransactionTime: number[];
    conversionData: ConversionData;
  } | null;
  error: string | null;
}

const initialState: TransactionDataState = {
  loading: false,
  data: null,
  error: null,
};

interface DataReturnType {
  transactionData: TransactionData;
  pendingTransactionTime: number[];
  conversionData: ConversionData;
}

const baseUrl = 'https://mempool.space/api';

const getData = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export const fetchTransactionData = createAsyncThunk<DataReturnType, string>('data/fetchTransactionData', async (transactionId) => {
  // Combine fetches using Promise.all
  const [transactionData, pendingTransactionTime, conversionData] = await Promise.all([
    getData(`${baseUrl}/tx/${transactionId}`),
    getData(`${baseUrl}/v1/transaction-times?txId[]=${transactionId}`),
    getData(`${baseUrl}/v1/prices`),
  ]);

  return { transactionData, pendingTransactionTime, conversionData };
});

const transactionDataSlice = createSlice({
  name: 'transactionData',
  initialState,
  reducers: {},
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

export const { actions } = transactionDataSlice;
export default transactionDataSlice.reducer;
