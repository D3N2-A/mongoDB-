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

const Supra = new Car({
  _id: 2,
  name: "Supra",
  rating: 9.5,
  horsepower: 1450,
});

const Chiron = new Car({
  _id: 3,
  name: "Chiron",
  rating: 7.5,
  horsepower: 1600,
});

Car.insertMany([GT, Supra, Chiron], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Saved into collection");
  }
});
