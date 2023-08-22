import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../apis';

export const addChartData = createAsyncThunk('api/addChart', async (data) => {
  const response = await apis.addChartData(data);
  return response;
});

export const editChartData = createAsyncThunk(
  'api/editChart',
  async ({ id, data }) => {
    const response = await apis.editChartData(id, data);
    return response;
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(editChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(editChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default apiSlice.reducer;
