const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const emailRoutes = express.Router();

emailRoutes.use(bodyParser.urlencoded({ extended: false }));
emailRoutes.use(bodyParser.json());

emailRoutes.post('/send-email', async (req, res) => {
    try {
      const { recipient, subject, message } = req.body;
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chediouerghi88@gmail.com',
          pass: 'hbvajajcazpkvphm',
        },
      });
  
      const mailOptions = {
        from:recipient,
        to:" chediouerghi88@gmail.com",
        subject:subject,
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    }
  });
  module.exports = emailRoutes;