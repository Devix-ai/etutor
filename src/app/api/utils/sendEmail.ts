import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    auth: {
      user: process.env.MAIL_USERNAME, // Mailtrap username
      pass: process.env.MAIL_PASSWORD, // Mailtrap password
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS, // Mailtrap sender email
    to: email,
    subject: 'Verify your email',
    text: `Click the link below to verify your email: \n\n ${process.env.BASE_URL}/api/auth/verify?token=${token}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Could not send email');
  }
};
