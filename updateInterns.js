let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=>{
  if (err) throw err;
  let dbo = db.db("moviesdb");
  let movieCollections = dbo.collection("myMovies");
  movieCollections.updateOne({movie :"The Banker"}, {$set: {movie: "Avengers", year: 2019, rating: 10} }, (err, result)=>{
    if(err) throw err;
    console.log("updated!");
    db.close();
  });

  movieCollections.findOne({}, (err, result)=>{
    if (err) throw err;
    console.log(result);
    db.close()  
  })


});