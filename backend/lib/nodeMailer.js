import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const info = await transporter.sendMail({
      from: `"HuntPad Security" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });
  } catch (error) {
    console.log("Error sending email:", error);
  }
};
