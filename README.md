# Real Time Tweet Streamer


 A web application optimized for mobile with an infinite scroll to show the tweets of your favourite twitter accounts

### Getting Started

1. #### Clone repisotory

   `$ git clone https://github.com/fayceltouili/rt-tweet-streamer.git`


2. #### Install dependencies and pods

   `$ cd rt-tweet-streamer && npm install`

   `$ cd client && npm install`

3. #### Configuer Twitter Api keys

   You can generate keys and tokens in [The Twitter developer portal](https://developer.twitter.com/en/apps)

   Follow these [Insructions](https://developer.twitter.com/en/docs/basics/authentication/guides/securing-keys-and-tokens)

   Create a .env file in the root directory and save your keys as following:

   CONSUMER_KEY='your customer key'

   CONSUMER_SECRET='your customer secret'

   ACCESS_TOKEN_KEY='your access token key'

   ACCESS_TOKEN_SECRET='your access token secret'

4. #### Available Scripts

   In the project directory you can run:

   `$ npm run dev`

   Runs the Express server and React app in the development mode.

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




   `$ npm run test`

   Launches the test runner in the interactive watch mode.

   See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
