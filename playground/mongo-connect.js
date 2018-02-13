//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

obj = new ObjectID();
console.log(obj);

//Object destructuring
var user = {name: "Sushil", age: 37};
var {name} = user;
//it will print "sushil", as the above statement has created "name" variable using the object variable "user.name"
console.log(name);


MongoClient.connect("mongodb://localhost:27017/", (err, db) => {
    if(err){
        console.log("Unable to connect to mongodb server");
        return;
    }

    console.log("Connected to mongoDb server");
    dbo = db.db("TodoApp");

    // dbo.collection('todos').insertOne({
    //     "text": "something to do",
    //     "completed": "false"
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    dbo.collection("Users").insertOne({
        name: "sushil",
        age:37,
        location:"kanchrapara"
    }, (err, result) => {
        if(err){
            return console.log("Unable to insert into Users collection", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    })

    db.close();
});

