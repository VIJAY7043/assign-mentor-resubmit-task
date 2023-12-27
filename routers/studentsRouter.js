
import express from "express";
import { dbconnection } from "../db.js";

const studentsRouter = express.Router();

const client = await dbconnection();
const database = client.db("Task1");
const studentsCollection = database.collection("Students1");

studentsRouter.post("/", async (req, res) => {
  try {
    const studentData = req.body;
    const result = await studentsCollection.insertOne(studentData);
    res.send(result.ops[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default studentsRouter;
