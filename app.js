const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello Num' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App Started');
})