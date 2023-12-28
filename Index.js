// index.js (Main file)
import express from "express";
import mentorsRouter from "./routers/mentorsRouter.js";
import studentsRouter from "./routers/studentsRouter.js";
import assignmentsRouter from './routers/assignmentsRouter.js'
import { dbconnection } from "./db.js";

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON in requests

const client = await dbconnection();

app.use("/api/mentors", mentorsRouter);
app.use("/api/students", studentsRouter);
app.use("/api/assignments", assignmentsRouter);

app.get("/sample", (req, res) => {
  res.send({ message: "I am working good" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
