const nodemailer = require('nodemailer');

require('dotenv').config();
const { MAILBOX_PASSWORD } = process.env;

async function sendRestoreEmail(name, email, password) {
    try {
        const mailServer = {
            host: 'smtp.meta.ua',
            port: 465,
            secure: true,
            auth: {
                user: 'goit-healthy-hub@meta.ua',
                pass: MAILBOX_PASSWORD,
            },
        };

        const mailContent = {
            to: email,
            from: 'goit-healthy-hub@meta.ua',
            subject: 'Restore access to HealthyHub',
            html: `
                <p><b>Dear ${name}!</b></p>
                <br>
                <p>Thank you for using HealthyHub.</p>
                <p>Your new password: ${password}</p>
            `,
        };

        const mailer = nodemailer.createTransport(mailServer);
        await mailer.sendMail(mailContent);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { sendRestoreEmail };
