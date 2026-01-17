const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "codewithdev179@gmail.com",
    pass: "ezzvdbbjgihkpbkm",
  },
});

const sendMail = async (to, subject, html) => {
  let info = {
    to,
    subject,
    html,
  };

  return await transporter.sendMail(info);
};

module.exports = sendMail;
