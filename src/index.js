const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');  

const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Remainder Service is running on port ${PORT}`);
    // sendBasicEmail(
    //     'sender@example.com',
    //     'manishxyz333@gmail.com',
    //     'Test Email',
    //     'This is a test email by Manish Mishra server project.'
    // )

    // cron.schedule('*/2 * * * *', () => {
    //     console.log('Running a task every day at 9:00 AM');
    // })
            

    });
}   
setupAndStartServer();