var mongo = require('mongodb')

var Sahmie = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";
Sahmie.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created by Sahmie!");
  db.close();
});
