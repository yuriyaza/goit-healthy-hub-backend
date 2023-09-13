const nodemailer = require('nodemailer');

require('dotenv').config();
const { BASE_URL, MAILBOX_PASSWORD } = process.env;

async function sendVerificationEmail(email, verificationCode) {
    try {
        const mailServer = {
            host: 'smtp.ukr.net',
            port: 465,
            secure: true,
            auth: {
                user: 'yuriy.aza@ukr.net',
                pass: MAILBOX_PASSWORD,
            },
        };

        const mailContent = {
            to: email,
            from: 'yuriy.aza@ukr.net',
            subject: 'Confirm of you registration',
            html: `
            <p>Please click on the link below to confirm your registration:</p>
             <a href="${BASE_URL}/api/users/verify/${verificationCode}" target="_blank">Verify email </a>
        `,
        };

        const mailer = nodemailer.createTransport(mailServer);
        await mailer.sendMail(mailContent);
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = { sendVerificationEmail };
