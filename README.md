# The Movie Database Project

Movie database interface created in React that uses the TMDB api to populate movies. Currently it displays popular movies, provides a search interface and shows movie details when a movie is selected.

## Running the App

```bash
update the api key in .env file
docker build . -t movie-database
docker run -it -d -p 80:80 --name tmdb movie-database
open localhost
```

## Online version

https://movie-database-36284.firebaseapp.com/

