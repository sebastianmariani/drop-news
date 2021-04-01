const express = require('express');
const request = require('request');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send('hello world'));

app.get('/newspage', (req, res) => {
    request(
        `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=${req.query.searchCriteria}&apiKey=${process.env.API_KEY}`,
        function(error, response, body) {
            if(!error && response.statusCode == 200) {
                let parsedBody = JSON.parse(body)
                let articles = parsedBody.articles
                res.send(articles);
            }
        }
    )
});

app.listen(port, () => console.log(`Server running on port ${port}`))