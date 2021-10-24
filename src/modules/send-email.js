import nodemailer from 'nodemailer';
import 'dotenv/config';
import { mailAuth } from '../config/mailAuth';
import { insertEmail } from '../db/queries';

export class SendEmail {
  async execute(request, response) {
    const { from, to, subject, text } = request.body;

    const email = { from, to, subject, text };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: mailAuth,
    });

    transporter
      .sendMail({
        from,
        to,
        subject,
        text,
      })
      .catch((error) => console.error(error));

    await insertEmail(email);

    return response.status(200).send();
  }
}
