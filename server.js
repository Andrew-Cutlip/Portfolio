require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.username,
        pass: process.env.password
    }
});

const send = (email, name, phone, text ) => {

    const message = {
      from: process.env.username,
      to: process.env.username,
      subject: `Form message from ${name}`,
      text : `${name} \n Email: ${email}\n Phone: ${phone} \n Message: ${text}`
    }

    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      )
    })
  }

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.post('/api/contact', (req, res) => {
        const body = req.body;
        const name = body.firstName + "_" + body.lastName;
        console.log(body);
        send(body.email,name, body.phone, body.message);
        res.send('success');
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err;
        console.log('> Read on http://localhost:3000')
    })
});