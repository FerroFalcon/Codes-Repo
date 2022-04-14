
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Error detected, please check name field"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
    }
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 3,
    review: "Pretty solid as a fruit",
});
// fruit.save();

// Person Schema and Document
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema,
});

const Person = new mongoose.model("People", personSchema);
// const person = new Person({
//     name: "Jason",
//     age: 34,
// });
const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: fruit,
});
person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 4,
    review: "The Best Fruit",
});
const orange = new Fruit({
    name: "Orange",
    rating: 2,
    review: "Too sour for me",
});
const banana = new Fruit({
    name: "Banana",
    rating: 1,
    review: "Weird texture",
});
const peach = new Fruit({
    rating: 1,
    review: "Weird texture",
});


// Inserting many documents at once
// Fruit.insertMany([kiwi, orange, banana, peach], function(err){
//     if (err){
//         console.log(err);
//     } 
//     else {
//         console.log("successful");
//     }
// });

//  Printing each fruit name
// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err);
//     } 
//     else {

//         // mongoose.connection.close();

//         fruits.forEach(function(fruit) {
//             console.log(fruit.name);
//         });
//     }
// });

// Updating Apple to Peach
// Fruit.updateOne({_id: "6252981bb6ffa68a1d6756fc"}, {name: "Peach"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Update Successful");
//     }
// })

// Deleting Apple
// Fruit.deleteMany({name: ["Kiwi", "Orange", "Banana"]}, function(err){
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Deletion Successful");
//     }
// });