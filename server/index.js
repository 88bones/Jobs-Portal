const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");
const loginRoutes = require("./routes/loginRoutes");
const jobRoutes = require("./routes/jobRoutes");
//const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/job-portal")
  .then(() => console.log("connected"))
  .catch((error) => console.error("Failed: ", error));

app.use("/api/users", userRoutes);
app.use("/api/recruiters", recruiterRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(3001, () => {
  console.log("app is running ");
});
