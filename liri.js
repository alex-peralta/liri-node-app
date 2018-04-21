require('dotenv').config();

// Importing the API keys files from keys.js file
const keys = require("./keys.js");

// Creating new objects from imported file
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

console.log(spotify.id);
console.log(client);
console.log(process.env.TWITTER_CONSUMER_KEY);