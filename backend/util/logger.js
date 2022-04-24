const winston = require('winston');
const expressWinston = require('express-winston');
require('winston-daily-rotate-file');

const { combine, timestamp, json } = winston.format;

const transport = new winston.transports.DailyRotateFile({
    filename: 'inventory-%DATE%.log',
    dirname: './logs/',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '10m',
    maxFiles: '7d'
})

expressWinston.requestWhitelist.push('body');

module.exports.logger = expressWinston.logger({
    transports: [
        transport
    ],
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }), 
        json(),
    ),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{res.statuscode}} {{req.method}} user: {{req.headers.username}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: false, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
});
