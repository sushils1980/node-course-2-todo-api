//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if(err){
        console.log("Unable to connect to mongodb server");
        return;
    }

    console.log("Connected to mongoDb server");
    dbo = db.db("TodoApp");

    //delete many
    // dbo.collection("todos").deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });


    //delete one
    // dbo.collection("todos").deleteOne({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // dbo.collection("todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // dbo.collection("Users").deleteMany({name: "sushil"}).then((result) => {
    //     console.log(result);
    // });

    dbo.collection("Users").findOneAndDelete({name: "Mike"}).then((result) => {
        console.log(result);
    });


    db.close();
});

