// use .env to hide keys
require('dotenv').config();

// Importing the API keys files from keys.js file
const keys = require("./keys.js");
const fs = require("fs");
const request = require("request");

// Importing the API keys from keys.js file
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const client = new Twitter(keys.twitter);
const spotify = new Spotify(keys.spotify);

// Storing of the command line options

const appType = process.argv[2];
const appOption = process.argv[3];

switch (appType) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    default: console.log('ERROR: "No Parameters provided"' + '\n' +
        'Options:' + '\n' +
        '1.) node liri.js my-tweets' + '\n' +
        '2.) node liri.js spotify-this-song "Use quotes for multi-word Titles"' + '\n' +
        '3.) node liri.js movie-this' + '\n' +
        '4.) node liri.js do-what-it-says' + '\n');

}