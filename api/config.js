const BASE_URL = "https://api.coingecko.com/api/v3/";

export const URLS = {
  COIN_LIST: BASE_URL + "coins/markets?vs_currency=inr&order=market_cap_desc",
  COIN_DATA: BASE_URL + "coins/",
};
