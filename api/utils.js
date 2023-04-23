import axios from "axios";
import { URLS } from "./config";

export const fetchApi = async (dataState, paginationUrl) => {
  const response = await axios
    .get(URLS.COIN_LIST + paginationUrl, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => err);

  dataState(response.data);
};

export const fetchCoinData = async (url, dataState) => {
  const response = await axios
    .get(URLS.COIN_DATA + url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => err);

  dataState(response.data);
};

export const currencyFormat = (num) => {
  return num.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ",");
};
