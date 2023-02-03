import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notify",
  initialState: {
    notification: [],
  },
  reducers: {
    setNotify: (state, action) => {
      const { notification } = action.payload;
      state.notification = notification;
    },
  },
});

export const { setNotify } = notificationSlice.actions;

export default notificationSlice.reducer;

export const selectCurrentNotification = (state) => state.notify.notification;

// export const selectCurrentToken = (state) => state.auth.token;
