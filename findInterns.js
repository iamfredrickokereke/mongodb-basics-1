let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";


MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("moviesdb");
  let movieCollections = dbo.collection("myMovies");
  movieCollections.findOne({}, (err, result)=>{
    if (err) throw err;
    console.log(result);
    db.close()  
  })

  movieCollections.find({rating:7}).toArray( (err, result)=>{
    if (err) throw err;
    console.log(result);
    db.close(); 
  })
  
  movieCollections.find({}, { projection: {_id: 0, movie: 1}}).toArray( (err, result)=>{
    if (err) throw err;
    console.log(result);
    db.close(); 
  })
 
});
