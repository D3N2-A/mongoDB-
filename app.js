const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/carsDB");

const carSchema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: [true, "Why no Name?"] },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  horsepower: Number,
});

const car = mongoose.model("car", carSchema);

const GT = new car({
  _id: 1,
  name: "GT",
  rating: 8.5,
  horsepower: 1200,
});

const Supra = new car({
  _id: 2,
  name: "Supra",
  rating: 9.5,
  horsepower: 1450,
});

const Chiron = new car({
  _id: 3,
  name: "Chiron",
  rating: 7.5,
  horsepower: 1600,
});

// Chiron.save();

// car.insertMany([GT, Supra, Chiron], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Saved into collection");
//   }
// });

// car.find(function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     result.forEach((element) => console.log(element.name));
//   }
// });

// car.updateOne({ _id: 3 }, { horsepower: 1500 }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucessfully updated document");
//   }
// });

// car.deleteOne({ _id: 3 }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted document");
//   }
// });

const peopleSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: String,
  age: Number,
  favoriteCar: carSchema,
});

const person = mongoose.model("person", peopleSchema);

const John = new person({
  _id: 1,
  name: "John",
  age: 32,
});

person.updateOne({ id: 1 }, { favoriteCar: Supra }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("update success");
  }
});
