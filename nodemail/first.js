var http = require('http');
var nodemailer = require('nodemailer');
const keys = require('./config/keys');
// email configuration
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.gmail.user,
        pass: keys.gmail.pass,
    }
});

// email object
var mailOptions = {
    from: 'rahul171631.cse@chitkara.edu.in',
    to: 'rahulgoyal0.rg@gmail.com',
    subject: 'Sending Email using Nodee.js',
    text: 'That was easy!'
};

// sendemail function
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// basic server
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8081);