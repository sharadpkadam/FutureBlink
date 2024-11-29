import nodemailer from "nodemailer";

export async function sendEmail(recipient, subject, body) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    text: body,
  });
}
