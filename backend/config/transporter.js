const nodemailer = require("nodemailer");
require("dotenv").config()
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user:process.env.APP_EMAIL,
        pass:process.env.APP_PASSWORD
    }
});

module.exports = transporter;