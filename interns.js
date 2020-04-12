let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
let movieList = [
  {movie: "The Banker", year: "2020", rating: 8},
  {movie: "Bad Boys", year: "2020", rating: 7}, 
  {movie: "The Hunt", year: "2020", rating: 7}, 
  {movie: "Bloodshot", year: "2020", rating: 7.5}, 
  {movie: "First Cow", year: "2020", rating: 6.5}
];


const collections = function(err, db) {
  if (err) throw err;
  let dbo = db.db("moviesdb");
  let movieCollections = dbo.collection("myMovies")
  movieCollections.insertMany(movieList, (err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
};

MongoClient.connect(url, collections);
module.exports = collections;