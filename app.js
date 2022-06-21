const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/carsDB");

const carSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  horsepower: Number,
});

const Car = mongoose.model("car", carSchema);

const GT = new Car({
  _id: 1,
  name: "GT",
  rating: 8.5,
  horsepower: 1200,
});

const peopleSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
});

const People = mongoose.model("people", peopleSchema);

const Nigga = new People({
  _id: 1,
  name: "Nigga Singh",
  age: 19,
});

Nigga.save();
