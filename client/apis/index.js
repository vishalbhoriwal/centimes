import fetchApi from './request';

export default {
  fetchChartData: async () => {
    try {
      const data = await fetchApi({ endpoint: '/data' });
      return data;
    } catch (err) {
      return err;
    }
  },
  addChartData: async (payload) => {
    try {
      const data = await fetchApi({
        endpoint: '/data',
        method: 'POST',
        data: payload,
      });
      return data;
    } catch (err) {
      return err;
    }
  },
  editChartData: async (id, payload) => {
    try {
      const data = await fetchApi({
        endpoint: `/data/${id}`,
        method: 'PUT',
        data: payload,
      });
      return data;
    } catch (err) {
      return err;
    }
  },
  deleteChartData: async (id) => {
    try {
      const data = await fetchApi({
        endpoint: `/data/${id}`,
        method: 'DELETE',
      });
      return data;
    } catch (err) {
      return err;
    }
  },
};
