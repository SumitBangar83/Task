const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports 
  auth: {
    user: "sumitbangar53@gmail.com",
    pass: "mkot ozxj qnss qffc",
  },
});

const sendEmail = async()=>{
    try{
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const info = await transporter.sendMail({
        from: '"Coding Craft" <sumitbangar53@gmail.com>',
        to: "tarun.singh.7803@gmail.com",
        subject: "Hello World ✅",
        text: `Your One Time Password is ${otp}`, // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    });
    }
    catch(err){
        console.log(err)
    }
}
sendEmail()