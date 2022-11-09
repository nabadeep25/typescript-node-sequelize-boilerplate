import nodemailer from "nodemailer";
import { emailConfig } from "../config/config";
import { forgotPasswordMailTemplate, mailTemplate } from "./mailTemplate";

const transporter = nodemailer.createTransport({
  service: emailConfig.emailService,
  auth: {
    user: emailConfig.emailUser,
    pass: emailConfig.emailPassword,
  },
});

export const sendOTP = (email: string, otp: string) => {
  return sendMail({
    to: email,
    html: forgotPasswordMailTemplate({ otp }),
    subject: "OTP Verification",
  });
};
export const sendMail = (exports.sendMail = function (details: {
  to: string;
  subject: string;
  html: string;
  attachments?: any[];
  cc?: any;
  bcc?: any;
  from?: string;
}) {
  const mailOptions = {
    to: details.to,
    subject: details.subject,
    html: details.html,
    attachments: details.attachments || [],
    cc: details.cc || null,
    bcc: details.bcc || null,
    from: details.from || emailConfig.emailFrom,
  };

  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
});

exports.sendMessage = (
  email: string,
  messageBody: any,
  attachment: any[] = []
) => {
  return sendMail({
    to: email,
    attachments: attachment,
    subject: messageBody.subject,
    html: mailTemplate(messageBody.subject, messageBody.body),
  });
};
