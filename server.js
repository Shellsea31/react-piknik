const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
require("./models/mongoConnection")



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/apiRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
