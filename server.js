const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  provider: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "", //TODO: Note: Password would be public if uploading to Github
    pass: ""
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

app.use(function(req, res, next) { //FIXME: Access to XMLHttpRequest error (blocked by CORS policy)
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", function(req, res, next) {
  let senderName = req.body.contactFormFirst + " " + req.body.contactFormLast;
  let senderEmail = req.body.contactFormEmail;
  let messageSubject = req.body.contactFormSubject;
  let messageText = req.body.contactFormMessage;

  let mailOptions = {
    to: ["contact.accuracyfirm@gmail.com"],
    from: senderName,
    subject: messageSubject,
    text: messageText,
    replyTo: senderEmail
  };

  if (senderName === "") {
    res.status(400);
    res.send({
      message: "Empty."
    });
    return;
  }

  if (senderEmail === "") {
    res.status(400);
    res.send({
      message: "Empty."
    });
    return;
  }

  if (messageSubject === "") {
    res.status(400);
    res.send({
      message: "Empty."
    });
    return;
  }

  if (messageText === "") {
    res.status(400);
    res.send({
      message: "Empty."
    });
    return;
  }

  transporter.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
      res.end("Error");
    } else {
      console.log("Message sent: ", response);
      res.end("Success");
    }
  });
});

// Testing purposes (TODO: Delete)
app.listen(port, function() {
  console.log("Express started on port: ", port);
});
