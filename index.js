const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1/movieApp")
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!");
    console.log(err);
  });


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({title:"Amadeus",year:1986, score:9.2,rating:"R"})

// Movie.insertMany([
//   {title:"Amelie",year:1986, score:9.2,rating:"R"},
//   {title:"Terminator",year:1984, score:9.1,rating:"R"},
//   {title:"Highlander",year:1982, score:9.6,rating:"G"}
// ])
// .then((data) => {
//   console.log("It Worked!");
//   console.log(data);
// })
// .catch((err) => {
//   console.log("Something went wrong!");
//   console.log(err);
// })



