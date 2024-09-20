import { createSlice } from "@reduxjs/toolkit";

interface JWT {
  userInfo: string | null;
  token: string | null;
}

const initialState: JWT = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // const { user, accessToken } = action.payload;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
