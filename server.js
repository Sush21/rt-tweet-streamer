require('dotenv').config();
const express = require('express');
const Twitter = require('twitter');
const cors = require("cors");

const app = express();
app.use(cors());

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET
} = process.env;


const client = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET
});


const defaults = {
  screen_name: 'realDonaldTrump',
  tweet_mode: 'extended',
  count: 20,
};


app.route('/:handle')
  .get((req, res) => {
    const params = {
      ...defaults,
      max_id: req.query.max_id,
      screen_name: req.params.handle,
    };
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
      if (!error) {
        res.json(tweets);
      } else {
        console.error(error)
      }
    });
  });

app.listen(3001, error => {
  console.log('Twitter streamer 🚀 is listening on port 3001');
});