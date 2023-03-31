import connectToMongo from "./database/db";
import express from "express";

var cors = require("cors");
import dotenv from "dotenv";

dotenv.config();
connectToMongo();

const app = express();
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO FROM HOME");
});


app.listen(port, () => console.log("API IS RUNNING 🚀"));