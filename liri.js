var dotenv = require("dotenv").config();
var keys = require("./keys");
var axios = require("axios")
var Spotify = require('node-spotify-api');
var moment = require('moment');

// var spotify = new Spotify(keys.spotify);

var spotify = new Spotify(keys.spotify)

switch(process.argv[2]){
    case "concert-this":
        var artist = process.argv.slice(3).join(" ");
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
        response.data.forEach(place => {
            console.log(place.venue.name)
            console.log(place.venue.city + ", " + place.venue.country + ".")
            console.log(moment(place.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
            console.log("--------------------");
        });
        })
    break;

    case "spotify-this-song":
    var song = process.argv.slice(3).join(" ");
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       data.tracks.items.forEach(function(artist){
        console.log("Artist: " + artist.artists[0].name);
        console.log("Song: " + artist.name); 
        console.log("Album: " + artist.album.name);
        console.log("Spotify URL: " + artist.external_urls.spotify);
        console.log("----------------------");
       })
      
      });

    break;

    case "movie-this":

    break;

    case "do-what-it-says":

    break;
}
