const nodemailer = require("nodemailer")

const sendemail = async (req, res) => {
    const { email, name, contact, purpose } = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.Gmail_User,
            pass: process.env.Gmail_Pass,
        },
    });
    const emailContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f6f6f6;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #4CAF50;
                color: #ffffff;
                padding: 10px 0;
                text-align: center;
            }
            .content {
                margin: 20px 0;
            }
            .content h1 {
                font-size: 24px;
                margin-bottom: 10px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.5;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Person name : ${name} </h1>
            </div>
            <div class="content">
                <h1>Person Contact Detail ${contact} </h1>
                <h1>Person email Detail ${email} </h1>
                <h1>Person Purpose for consultation ;</h1>
                <h1>${purpose} </h1>
                
    
            </div>
            <div class="footer">
                <p>&copy; 2024 oneclickevisa . All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
    let mailOptions = {
        from: process.env.Gmail_User,
        to: "drpriyaanka1@gmail.com",
        // drpriyaanka1@gmail.com
        // ishitasingh96500@gmail.com
        subject: "Consultation  ",
        html: emailContent
    };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
const sendemailtestimony = async (req, res) => {
    const { testimony, name } = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.Gmail_User,
            pass: process.env.Gmail_Pass,
        },
    });
    const emailContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f6f6f6;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #4CAF50;
                color: #ffffff;
                padding: 10px 0;
                text-align: center;
            }
            .content {
                margin: 20px 0;
            }
            .content h1 {
                font-size: 24px;
                margin-bottom: 10px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.5;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
             <h1>The tetimony of a Client </h1>
                <h1>Client name : ${name} </h1>
            </div>
            <div class="content">
                <h1>${name} testimony : ${testimony} </h1>
            </div>
            <div class="footer">
                <p>&copy; 2024 oneclickevisa . All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
    let mailOptions = {
        from: process.env.Gmail_User,
        to: "drpriyaanka1@gmail.com",
        // drpriyaanka1@gmail.com
        // ishitasingh96500@gmail.com
        subject: "Client Feedback  ",
        html: emailContent
    };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
module.exports = {
    sendemail,
    sendemailtestimony
};