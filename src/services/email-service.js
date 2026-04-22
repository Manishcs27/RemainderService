const sender = require('../config/emailConfig');

const sendBasicEmail = async (from,to, mailSubject, mailBody) => {
   try{
       await sender.sendMail({
           from: from,
           to: to,
           subject: mailSubject,
           text: mailBody
       });
   } catch (error) {
       console.error('Error sending email:', error);
   }
   
}
module.exports = {
    sendBasicEmail
}