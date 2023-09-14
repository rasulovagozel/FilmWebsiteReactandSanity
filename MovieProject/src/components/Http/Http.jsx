import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAPI = async (url) => {
  return await HTTP.get(url);
};
