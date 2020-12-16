/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientService from "../services/patientService";
// import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("someone pationed here");
  res.send(patientService.getNonSensitiveEntries());
});

router.post("/", (req, res) => {
  const { name, occupation, gender, dateOfBirth } = req.body;
  const newPatientEntry = patientService.addPatient({
    name,
    occupation,
    gender,
    dateOfBirth,
  });
  res.json(newPatientEntry);
  // try {
  //   const newPatientEntry = toNewPatientEntry(req.body);
  //   const addedEntry = patientService.addPatient(newPatientEntry);
  //   res.json(addedEntry);
  // } catch (e) {
  //   res.status(400).send(e.message);
  // }
});

export default router;
