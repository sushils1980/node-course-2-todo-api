var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "Cook Dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (err) => {
//     console.log("Unable to save todo");
// });

// var newTodo = new Todo({
//     text: "  Edit this video ",
//     completed: true,
//     completedAt: 123456
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo: ", doc);
// }, (err) => {
//     console.log("Error: ", err);
// });

var User = mongoose.model("User", {
    email:{
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    password:{
        type: String
    }
});

var newUser = new User({
    email: "sushils@interrait.com"
});

newUser.save().then((doc) => {
    console.log("Saved Doc: ", doc);
}, (err) => {
    console.log("Error: ", err);
});