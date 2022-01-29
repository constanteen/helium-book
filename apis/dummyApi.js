import axios from 'axios';

export const dummyApi = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "61f1baa871ea1385d2511faa",
  }
})

// export const dummyApi = axios.create({
//   baseURL: "https://fakestoreapi.com",
// });

