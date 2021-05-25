const mongoose = require("mongoose");
// testing database
const Test = require("../models/testModel");
const User = require("../models/userModel");

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

const user = {
  username: "Shellsea",
  password: "password",
  email: "email@email.com",
};

Test.create(data)
  .then((ex) => {
    console.log(ex);
  })
  .catch(({ msg }) => {
    console.log(msg);
  });

User.create(user)
  .then((ex) => {
    console.log(ex);
  })
  .catch(({ msg }) => {
    console.log(msg);
  });

module.exports = mongoose;
