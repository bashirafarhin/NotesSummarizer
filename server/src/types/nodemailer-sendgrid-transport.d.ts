declare module "nodemailer-sendgrid-transport" {
  import { TransportOptions } from "nodemailer";

  interface SendGridOptions {
    auth: {
      api_key: string;
    };
  }

  export default function sendGridTransport(
    options: SendGridOptions
  ): TransportOptions;
}
