import 'dotenv/config';
import nodemailer from 'nodemailer';

const host = process.env.MAIL_HOST;
const port = Number(process.env.MAIL_PORT);
const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

const sendEmail = async (file: Buffer) => {
  await transport.sendMail({
    from: '"DailyReport" <dailyreport@email.com>',
    to: '"User Test <usertest@email.com>"',
    subject: 'Daily Report 📄',
    text: 'Here is your daily report about top programming languages',
    attachments: [
      {
        filename: 'daily-report.pdf',
        content: file,
      }
    ]
  });
};

export { sendEmail };
