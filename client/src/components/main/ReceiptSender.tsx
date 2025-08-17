"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { sendEmails } from "@/redux/reducer/email.reducer";
import { emailActions } from "@/redux/slice/email.slice";

interface ReceiptSenderProps {
  messageId: string;
}

const schema = z.object({
  emails: z
    .string()
    .min(1, "At least one email required")
    .refine(
      (val) =>
        val
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean)
          .every((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
      "Invalid email format (use comma-separated list)"
    ),
});

type FormValues = z.infer<typeof schema>;

const ReceiptSender: React.FC<ReceiptSenderProps> = ({ messageId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.email
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { emails: "" },
  });

  const onSubmit = (data: FormValues) => {
    const recipients = data.emails
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    dispatch(
      sendEmails({
        recipients,
        subject: "Your Receipt",
        message: "Thanks for your purchase!",
        messageId,
      })
    );
  };

  // reset form + clear state on success
  useEffect(() => {
    if (success) {
      reset();
      setTimeout(() => {
        dispatch(emailActions.resetEmailState());
      }, 2000);
    }
  }, [success, reset, dispatch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Enter emails, comma separated"
        {...register("emails")}
        className="flex-grow p-2 bg-gray-900 text-white rounded-md text-sm outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="shrink-0 p-2 bg-gray-800 hover:bg-gray-900 rounded-full hover:cursor-pointer disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {success && <Check className="text-green-500" size={20} />}
      {error && <X className="text-red-500" size={20} />}
      {errors.emails && (
        <p className="text-red-500 text-xs">{errors.emails.message}</p>
      )}
    </form>
  );
};

export default ReceiptSender;
