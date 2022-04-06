const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(express.json());
//app.use(cookieParser());

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api/item', routes.itemRoute);
app.use('/api/user', routes.userRoute);

app.get('/', (req, res) => {
    res.send({msg:"API ROOT"});
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server started on port ${process.env.SERVER_HOST}.`);
    console.log(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/`);
});