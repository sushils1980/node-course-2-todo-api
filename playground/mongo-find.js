//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if(err){
        console.log("Unable to connect to mongodb server");
        return;
    }

    console.log("Connected to mongoDb server");
    dbo = db.db("TodoApp");

    dbo.collection("todos")
        .find({_id: new ObjectID('5a81917d1ec9ac069c0e0c3f')})
        .toArray().then((docs) => {
        console.log("todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("unable to fetch todos: ", err);
    });

    dbo.collection("todos")
    .find()
    .count().then((count) => {
    console.log(`todos count: ${count}`);
    
    }, (err) => {
        console.log("unable to fetch todos: ", err);
    });

    db.close();
});

