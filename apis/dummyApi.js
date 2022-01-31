import axios from 'axios';

export const dummyApi = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": process.env.NEXT_PUBLIC_APP_ID,
  }
})
