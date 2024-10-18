import nodemailer from 'nodemailer';

export async function sendVerificationEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    // Your SMTP configuration
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: email,
    subject: 'Account Verification',
    text: `Please verify your account by clicking this link: ${process.env.FRONTEND_URL}/verify?token=${token}`,
    html: `<p>Please verify your account by clicking this link: <a href="${process.env.FRONTEND_URL}/verify?token=${token}">${process.env.FRONTEND_URL}/verify?token=${token}</a></p>`,
  };
  
  return transporter.sendMail(mailOptions);
}
