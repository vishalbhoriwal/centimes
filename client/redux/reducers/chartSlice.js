import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../apis';

export const fetchChartData = createAsyncThunk(
  'api/fetchChart',
  async () => await apis.fetchChartData()
);

const apiSlice = createSlice({
  name: 'fetchChart',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
