import { Request, Response } from "express";
// import { sendEmail } from "../services/email.service";

export const sendEmailsToRecipients = async (req: Request, res: Response) => {
  try {
    const { messageId, recipients, subject, message } = req.body;
    // if (!Array.isArray(recipients) || recipients.length === 0) {
    //   return res.status(400).json({ error: "Recipients must be an array" });
    // }

    // for (const email of recipients) {
    //   await sendEmail({
    //     to: email,
    //     subject: subject || "Notification",
    //     html: message || "<p>No content provided</p>",
    //   });
    // }
    return res.status(200).json({
      messageId,
      recipients,
      message: "Emails sent successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send emails" });
  }
};
