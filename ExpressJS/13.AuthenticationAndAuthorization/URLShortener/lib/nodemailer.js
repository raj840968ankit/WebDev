import nodemailer from 'nodemailer'

const testAccount = await nodemailer.createTestAccount()  //it can access auth field of 'nodemailer.createTransport'

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",    //smtp.google.email but we are using ethereal testing mail
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "mercedes.rath74@ethereal.email",  //this value is taken from ethereal website -> create account
    pass: "41zaDqPs9ZRfqKNGAN",
  },
});

//now we are using our own created sendEmail function(auth.controller.js -> resendVerificationLink)
export const sendEmail = async ({to, subject, html}) => {
    const info = await transporter.sendMail({
        from : `URL Shortener <${testAccount.user}>`,
        to, 
        subject, 
        html
    })
    
    const testEmailUrl = nodemailer.getTestMessageUrl(info)
    console.log('verify email ',testEmailUrl);
    
}


