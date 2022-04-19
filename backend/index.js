const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');
const { logger, errorLogger } = require('./util/logger');
const checkJwt = require('./util/authenticate');

app.use(express.json());
//app.use(cookieParser());

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(logger);

app.use(checkJwt);

app.get('/', (req, res) => {
    res.status(200).send({msg:"API ROOT"});
});

app.use('/api/item', routes.itemRoute);
//app.use('/api/user', routes.userRoute);

// app.use(errorLogger);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server started on port ${process.env.SERVER_HOST}.`);
    console.log(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/`);
});