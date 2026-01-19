import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codewithdev179@gmail.com",
    pass: "ezzvdbbjgihkpbkm",
  },
});

export const sendMail = async (to, subject, html) => {
  let info = {
    to,
    subject,
    html,
  };

  return await transporter.sendMail(info);
};
