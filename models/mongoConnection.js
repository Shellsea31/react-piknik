const mongoose = require("mongoose");
// testing database
const Test = require("../models/testModel");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactPiknik",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to Piknik");
  }
);

const data = {
  string: "Does this database work?",
  number: 100,
};

Test.create(data)
  .then((ex) => {
    console.log(ex);
  })
  .catch(({ msg }) => {
    console.log(msg);
  });

module.exports = mongoose;
