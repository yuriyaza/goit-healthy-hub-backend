const mongoose = require('mongoose');
const colors = require('colors');

const { app } = require('./app');

require('dotenv').config();
const { DB_HOST } = process.env;

async function databaseConnect() {
    try {
        mongoose.set('strictQuery', false);
        const database = await mongoose.connect(DB_HOST);
        console.log(`\nDatabase connected successful: ${database.connection.name}`);
    } catch (error) {
        console.log(colors.bgRed(`\nDatabase connection error, ${error.message}`));
        process.exit(1);
    }
}

async function serverStart() {
    await databaseConnect();

    app.listen(4000, () => {
        console.log(colors.bgGreen('Server started on port: 4000\n'));
    }).on('error', error => {
        console.log(colors.bgRed(`Server connection error, ${error.message}\n`));
    });
}

serverStart();
