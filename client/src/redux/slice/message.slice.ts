import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllMessages, sendMessage } from "../reducer/message.reducer";
import { Message } from "@/lib/types/message";

// State interface
interface MessageState {
  data: Message[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MessageState = {
  data: [],
  loading: false,
  error: null,
};

// Slice
const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllMessages.fulfilled,
        (state, action: PayloadAction<Message[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchAllMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch messages";
      })
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload.user); // add new message to state
        state.data.push(action.payload.ai);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice.reducer;
