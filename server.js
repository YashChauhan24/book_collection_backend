import express from "express";
import mongoose from "mongoose";
import Router from "./modules/routes/routes.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
server.use("/", Router);

const url = ""; // Paste your mongoDB url

mongoose
  .connect(url, {
    dbName: "library",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(async () => {
    console.log("Server successfully connected.");
  })
  .catch((err) => console.log(err));
server.listen(8081);
