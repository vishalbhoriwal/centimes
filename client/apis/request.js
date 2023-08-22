import axios from 'axios';

const api = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchApi = async ({ endpoint, method = 'GET', data }) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchApi;
