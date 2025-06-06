const express = require("express");
const JobModel = require("../models/jobModel");
const { getJob } = require("../controllers/getJobController");
const { getJobApply } = require("../controllers/getJobApply");

const router = express.Router();

router.post("/createJob", async (req, res) => {
  const job = req.body;
  const newJob = new JobModel(job);
  await newJob.save();
  res.json(newJob);
});

router.get("/getJobs", async (req, res) => {
  try {
    const result = await JobModel.find({}).populate("postedBy", "companyname");
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get("/getJob/:id", getJob);
router.get("/getJobApply/:_id", getJobApply);

module.exports = router;
