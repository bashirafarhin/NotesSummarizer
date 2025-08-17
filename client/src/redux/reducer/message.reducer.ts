import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for your message if you have one
interface Message {
  _id: string;
  content: string;
  role: string;
  createdAt: string;
}

export const fetchAllMessages = createAsyncThunk<
  Message[], // Return type
  void, // Argument type
  { rejectValue: string }
>("message/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/messages/fetchAll`,
      {
        withCredentials: true,
      }
    );
    return res.data.messages as Message[];
  } catch (error: unknown) {
    console.error("Failed to fetch messages:", error);

    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }

    return rejectWithValue("Something went wrong");
  }
});

export const sendMessage = createAsyncThunk<
  Message, // Return type
  string, // Argument type
  { rejectValue: string }
>("messages/send", async (content, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/messages/send`,
      { content },
      { withCredentials: true }
    );
    return res.data as Message;
  } catch (error: unknown) {
    console.log(error);

    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send message"
      );
    }

    return rejectWithValue("Failed to send message");
  }
});
