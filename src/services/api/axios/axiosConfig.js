import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});


instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.results) {
      response.data.results = response.data.results.map((item) => ({
        ...item,
        Favourite: 'false',
      }));

    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
