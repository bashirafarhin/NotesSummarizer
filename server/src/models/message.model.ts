import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  role: "user" | "ai";
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema<IMessage>(
  {
    role: {
      type: String,
      enum: ["user", "ai"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
