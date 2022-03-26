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

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome in AUTH Backend' })
})

//Connection with DB
mongoose.connect(process.env.DB_URI, {
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