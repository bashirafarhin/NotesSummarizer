import { createSlice } from "@reduxjs/toolkit";
import { sendEmails } from "../reducer/email.reducer";

interface EmailState {
  loading: boolean;
  success: boolean;
  error: string | null;
  lastSent?: {
    messageId: string;
    recipients: string[];
  };
}

const initialState: EmailState = {
  loading: false,
  success: false,
  error: null,
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    resetEmailState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.lastSent = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmails.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendEmails.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.lastSent = {
          messageId: action.payload.messageId,
          recipients: action.payload.recipients,
        };
      })
      .addCase(sendEmails.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
