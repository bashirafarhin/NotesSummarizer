// import { Resend } from "resend";
// import env from "dotenv";
// env.config();

// const resend = new Resend(process.env.RESEND_API_KEY);

// interface EmailOptions {
//   to: string;
//   subject: string;
//   html: string;
// }

// export const sendEmail = async ({ to, subject, html }: EmailOptions) => {
//   try {
//     const response = await resend.emails.send({
//       //   from: process.env.ADMIN_EMAIL as string,
//       from: "Notes Summarizer <onboarding@resend.dev>",
//       to,
//       subject,
//       html,
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// };
