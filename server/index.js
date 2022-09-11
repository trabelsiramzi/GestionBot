const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors")
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://trabelsiramzitr:onDL29MjvCoQ9Mg7@cluster0.gsxhvhx.mongodb.net/SopraBot?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");

app.use("/api/json", routes.json);

//app.use(ErrorService);

app.listen(3501, () => {
  console.log("http://localhost:3501");
});