require('dotenv').config();
const express = require('express');
const Twitter = require('twitter');
const cors = require("cors");
const _ = require('lodash');


const app = express();
app.use(cors());

const keysAllowed = [
  'created_at',
  'id_str',
  'full_text',
  'favorite_count'];

const userKeysAllowed = [
  'name',
  'profile_banner_url',
  'profile_image_url',
  'screen_name',
  'description'];

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
  screen_name: 'potus',
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
        res.json(tweets.map(tweet => {
          const filtredTweetKeys = _.pick(tweet, keysAllowed);
          const filterUserKeys = _.pick(tweet.user, userKeysAllowed);
          return { ...filtredTweetKeys, ...filterUserKeys }
          }));
      } else {
        console.error(error)
      }
    });
  });

app.listen(3001, error => {
  console.log(error)
  console.log('Twitter streamer 🚀 is listening on port 3001');
});
