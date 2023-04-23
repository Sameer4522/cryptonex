import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initailState: {
    dataItems: [],
  },
  reducers: {
    setApiData: (state) => {
      state + 1;
    },
  },
});

export default dataSlice.reducer;
