const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');  

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Remainder Service is running on port ${PORT}`);
    sendBasicEmail(
        'sender@example.com',
        'manishxyz333@gmail.com',
        'Test Email',
        'This is a test email by Manish Mishra server project.'
    )

    });
}   
setupAndStartServer();