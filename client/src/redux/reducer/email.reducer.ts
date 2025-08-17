import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SendEmailsArgs {
  messageId: string;
  recipients: string[];
  subject: string;
  message: string;
}

interface EmailRecord {
  messageId: string;
  recipients: string[];
}

export const sendEmails = createAsyncThunk<
  EmailRecord,
  SendEmailsArgs,
  { rejectValue: string }
>(
  "emails/sendEmails",
  async ({ messageId, recipients, subject, message }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/emails/send`,
        {
          messageId,
          recipients,
          subject,
          message,
        }
      );

      if (res.status !== 200) {
        return rejectWithValue("Failed to send emails");
      }

      return {
        messageId,
        recipients,
      };
    } catch (err: unknown) {
      // Narrow unknown to AxiosError
      if (axios.isAxiosError(err)) {
        return rejectWithValue(
          err.response?.data?.message || "Error sending email"
        );
      }
      return rejectWithValue("Error sending email");
    }
  }
);
