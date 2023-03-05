//import express
const express = require("express");
const cors = require('cors');
const MovieController = require("./controller/Movie");
const app = new express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/build')));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// get all movie details
app.get('/api/getmovies', MovieController.getMovies);

// get one movie details
app.get('/api/getmovie/:id', MovieController.getMovie);

// Add new movie details
app.post('/api/addmovie', MovieController.addMovie);

// Remove a movie detail
app.post('/api/removemovie', MovieController.removeMovie);

// Update a movie detail
app.post('/api/updatemovie/:id', MovieController.updateMovie);

// Search Movie with name
app.post('/api/searchMovie', MovieController.movieSearch);

app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname ,'/build/index.html')); 
});

// Setting Port number
app.listen(8000, ()=>{
    console.log("Server is running in Port 8000")
})
