
const express = require('express');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Flask backend URL
const URL = process.env.BACKEND_URL || 'http://127.0.0.1:5005/api';

app.get('/', async function (req, res) {

    const options = {
        method: 'GET'
    };

    try {

        // Fetch data from Flask
        const response = await fetch(URL, options);

        if (!response.ok) {
            throw new Error('Backend API request failed');
        }

        const data = await response.json();

        // Send data to EJS template
        res.render('index', { data: data });

    } catch (err) {

        console.error(err);

        res.status(500).send('Internal Server Error');

    }

});

// Start server
app.listen(3000, function () {
    console.log('Express listening on port 3000!');
});
