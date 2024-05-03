const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
});

exports.forgotPasswordMail = async (userEmail, host, token) => {
    try {
        const mailOptions = {
            from: 'agriswift.app@gmail.com',
            to: userEmail,
            subject: 'Password Reset',
            text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n`
                + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
                + `http://${host}/reset-password/${token}\n\n`
                + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return 'Email sent';
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

exports.sendConfirmationEmail = async (userEmail, host, confirmationToken) => {
    try {
        const mailOptions = {
            from: "agriswift.app@gmail.com",
            to: userEmail,
            subject: "Confirm Your Account",
            html: `
                <p>Thank you for registering with AgriSwift Platform!</p>
                <p>Please click the following link to confirm your account:</p>
                <a href="http://${host}/confirm?token=${confirmationToken}">Confirm Account</a>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return 'Email sent';
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};




// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     // configure your email service here
//     // Example using Gmail:
//     service: 'gmail',
//     auth: {
//         user: 'agriswift.app@gmail.com',
//         pass: ''
//     }
// });

// exports.forgotPasswordMail = async(userEmail,host, token) => {
//     const mailOptions = {
//         from: 'agriswift.app@gmail.com',
//         to: userEmail,
//         subject: 'Password Reset',
//         text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n`
//             + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
//             + `http://${host}/reset-password/${token}\n\n`
//             + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return 'Error sending email';
//         } else {
//             console.log('Email sent: ' + info.response);
//             return 'Email sent';
//         }
//     });
// }

// exports.sendConfirmationEmail = async (email, confirmationToken) => {
//     const mailOptions = {
//         from: "agriswift.app@gmail.com",
//         to: email,
//         subject: "Confirm Your Account",
//         html: `
//           <p>Thank you for registering with AgriSwift Platform!</p>
//           <p>Please click the following link to confirm your account:</p>
//           <a href="http://your_domain.com/confirm?token=${confirmationToken}">Confirm Account</a>
//         `,
//       }

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return 'Error sending email';
//         } else {
//             console.log('Email sent: ' + info.response);
//             return 'Email sent';
//         }
//     });
// }