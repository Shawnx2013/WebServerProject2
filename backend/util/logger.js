// const winston = require('winston');

// const { combine, timestamp, json } = winston.format;

// const logger = winston.createLogger({
//     level: 'info',
//     format: combine(
//         timestamp({
//             format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
//         }), 
//         json()),
//     defaultMeat: {service: 'user-service'},
//     transports: [
//         new winston.transports.File({filename: 'error.log', level: 'error'}),
//         new winston.transports.File({filename: 'combined.log'})
//     ]
// })

// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
// }

// module.exports = logger;

const winston = require('winston');
const expressWinston = require('express-winston');

const { combine, timestamp, json } = winston.format;

module.exports.logger = expressWinston.logger({
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log', levle: 'info'})
    ],
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }), 
        json(),
    ),
    statusLevels: function (req, res) {
        return res.statusCode == 200;
    },
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{res.statuscode}} {{req.method}} {{req.url}} {{res.responseTime}}ms", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
});

module.exports.errorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.File({filename: 'error.log'}),
        new winston.transports.Console()
    ],
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }), 
        json(),
    ),
    statusLevels: function (req, res) {
        return res.statusCode !== 200;
    },
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{res.statuscode}} {{req.method}} {{req.url}} {{res.responseTime}}ms", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
});