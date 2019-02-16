var dotenv = require("dotenv").config();
var keys = require("./keys");
var axios = require("axios")
var Spotify = require('node-spotify-api');
var moment = require('moment');
var fs = require('fs');

var spotify = new Spotify(keys.spotify)

switch(process.argv[2]){
    case "concert-this":
        var artist = process.argv.slice(3).join(" ");
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
        response.data.forEach(place => {
            console.log(place.venue.name)
            var city = place.venue.city + ", " + place.venue.country + "."
            console.log(city)
            var date = moment(place.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")
            console.log(date);
            console.log("--------------------");
        var paragraph = `Artist: ${artist} \nVenue: ${place.venue.name}\nPlace: ${city}\nDate: ${date}\n\n`;
        text(paragraph);
        });
        })
    break;

    case "spotify-this-song":
    var song = process.argv.slice(3).join(" ");
    if(process.argv[3] == null){
        song = "The Sign"
    }
    spotFunc(song);
    function spotFunc (song){
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
        var paragraph = `Artist: ${artist.artists[0].name} \nSong: ${artist.name}\nAlbum: ${artist.album.name}\nSpotify URL: ${artist.external_urls.spotify}\n\n`;
        text(paragraph);
       })

      });
    }
    break;

    case "movie-this":
    var movie = process.argv.slice(3).join(" ");
      if(process.argv[3] == null){
          movie = "Mr.Nobody"
      }

axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`).then(
  function(response) {
    console.log('Movie title: ' + response.data.Title);
    console.log('Year released: ' + response.data.Year);
    console.log('Rated: ' + response.data.Rated);
    console.log(response.data.Ratings[1].Source+ ' score: ' + response.data.Ratings[1].Value);
    console.log('Country filmed: ' + response.data.Country);
    console.log('Languages available: ' + response.data.Language);
    console.log('Cast: ' + response.data.Actors)
    console.log('-----------------');
    console.log('Plot: ' + response.data.Plot);
    console.log('-----------------');
 
  var paragraph = `Movie title: ${response.data.Title}\nYear released: ${response.data.Year}\nRated: ${response.data.Rated}\n${response.data.Ratings[1].Source} score: ${response.data.Ratings[1].Value}\nCountry filmed: ${response.data.Country}\nLanguages available: ${response.data.Language}\nCast: ${response.data.Actors}\nPlot: ${response.data.Plot}\n\n`;
  text(paragraph);
})
    break;

    case "do-what-it-says":
    fs.readFile("./random.txt",'utf8',function(err,data){
        if(err){
            return console.log(err)
        }
       dataArray = data.split(",");
       spotFunc(dataArray[1])
    })
    break;
}


function text(p){
    fs.appendFile("log.txt",p,function(err){
        if (err){
            return console.log(err);
        }
    })
}