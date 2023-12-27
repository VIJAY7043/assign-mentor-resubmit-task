
import express from "express";
import { dbconnection } from "../db.js";

const assignmentsRouter = express.Router();

const client = await dbconnection();
const database = client.db("Task1");
const mentorsCollection = database.collection("Mentors1");
const studentsCollection = database.collection("Students1");

assignmentsRouter.post("/assign-students/:mentorId", async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const studentIds = req.body.studentIds;
    const result = await mentorsCollection.updateOne(
      { _id: mentorId },
      { $addToSet: { assignedStudents: { $each: studentIds } } }
    );
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

assignmentsRouter.put("/assign-mentor/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const newMentorId = req.body.newMentorId;
    const result = await studentsCollection.updateOne(
      { _id: studentId },
      { $set: { mentorId: newMentorId } }
    );
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

assignmentsRouter.get("/previous-mentor/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await studentsCollection.findOne({ _id: studentId });
    const previousMentorId = student.previousMentorId;
    const previousMentor = await mentorsCollection.findOne({ _id: previousMentorId });
    res.send(previousMentor);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default assignmentsRouter;
