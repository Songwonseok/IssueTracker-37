import axios from 'axios';
import { getToken } from '@utils/token';

// const { DEVELOPMENT_BASE_URL, PRODUCTION_BASE_URL } = process.env;
// const baseURL =
//   process.NODE_ENV === 'develop' ? DEVELOPMENT_BASE_URL : PRODUCTION_BASE_URL;

const instance = () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
      authorization: getToken() || '',
    },
  });
};

const request = {
  post: async ({ uri = '', data = {} }) => {
    try {
      const response = await instance().post(uri, data);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      // alert(error.message);
      throw new Error(error.message);
    }
  },

  get: async ({ uri = '' }) => {
    try {
      const response = await instance().get(uri);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      // alert(error.message);
      throw new Error(error.message);
    }
  },

  delete: async ({ uri = '' }) => {
    try {
      const response = await instance().delete(uri);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      // alert(error.message);
      throw new Error(error.message);
    }
  },

  put: async ({ uri = '', data = {} }) => {
    try {
      const response = await instance().put(uri, data);

      return response;
    } catch (err) {
      const { data: error } = err.response;

      // alert(error.message);
      throw new Error(error.message);
    }
  },
};

export default request;
