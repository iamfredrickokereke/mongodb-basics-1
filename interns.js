
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err, db) => {
  if (err) throw err;
  let dbo = db.db("mydb");
  let movieList = [
    {movie: "The Banker", year: "2020", rating: 8},  {movie: "Bad Boys", year: "2020", rating: 7}, {movie: "The Hunt", year: "2020", rating: 7}, {movie: "Bloodshot", year: "2020", rating: 7.5}, {movie: "First Cow", year: "2020", rating: 6.5}
  ];
  dbo.collection("myMovies").insertMany(movieList, (err, res) => {
    if (err) throw err;
    console.log(res);
    
    db.close();
  });
}); 