const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/api', require('./routes/authRoutes'))

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome in AUTH Service, Enjoy the /signup & /signin POST routes.' })
});
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome in AUTH Service, Enjoy the /api/signup & /api/signin POST routes.' })
});

//Connection with DB
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qzgcd.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log("Connected with MongoDB ");
    })
    .catch((err) => {
        console.log("Error in DB Connection: ", err);
    });


app.get('/', (req, res) => {
    res.json({ message: 'Hello Num' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App Started at port: ', PORT);
});