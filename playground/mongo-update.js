//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if(err){
        console.log("Unable to connect to mongodb server");
        return;
    }

    console.log("Connected to mongoDb server");
    dbo = db.db("TodoApp");

    // dbo.collection("todos").findOneAndUpdate({
    //     _id: new ObjectID("5a82bb82894abb44c4ee2bb6")
    // }, {
    //     $set: {completed: false}
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    dbo.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5a8192a4ee24791d58d0c5a1")
    }, {
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    //db.close();
});

