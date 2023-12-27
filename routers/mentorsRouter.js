
import express from "express";
import { dbconnection } from "../db.js";

const mentorsRouter = express.Router();

const client = await dbconnection();
const database = client.db("Task1");
const mentorsCollection = database.collection("Mentors1");

mentorsRouter.post("/", async (req, res) => {
  try {
    const mentorData = req.body;
    const result = await mentorsCollection.insertOne(mentorData);
    res.send(result.ops[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default mentorsRouter;
