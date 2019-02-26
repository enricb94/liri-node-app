# liri-node-app

## Repository:
https://github.com/enricb94/liri-node-app.git

### Open your Terminal : 

## install the package (spotify, Imdb, Axios, Moment, DotEnv)
npm install

###Description:

This is a Language Interpretation and Recognition Interface (LIRI). Through Node a command-line you will be able to search for musical songs, artists, upcoming concert venues and movie descriptions.

The app includes the following features:

* `concert-this`
	* This will search the Bands in Town Artist Events API 
	* node liri.js concert-this <YourArtist>
	* ![GIF](/gifs/gif1.gif?raw=true "concert-this")

* `spotify-this-song`
	* This will show the following information about the song 
	* node liri.js spotify-this-song <YourSong>
	* ![GIF](/gifs/gif2.gif?raw=true "spotify-this-song")

* `movie-this`
	* This will output the following information about your Movies 
	* node liri.js movie-this <YourMovies>
	* ![GIF](/gifs/gif3.gif?raw=true "movie-this")

* `do-what-it-says`
	* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands
	* node liris.js do-what-it-says
	* ![GIF](/gifs/gif4.gif?raw=true "do-what-it-says")






