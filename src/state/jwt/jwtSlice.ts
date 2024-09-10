import { createSlice } from "@reduxjs/toolkit";

interface JWT {
  access: string;
  refresh: string;
}

const initialState: JWT = {
  access: "",
  refresh: "",
};

const jwtSlice = createSlice({
  name: "JWT",
  initialState,
  reducers: {
    access: (state, action) => {
      state.access = "";
    },
    refresh: (state, action) => {
      state.refresh = "";
    },
  },
});

export const { access, refresh } = jwtSlice.actions;
export default jwtSlice.reducer;
