/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import patientData from "../../data/patients.json";
import { Patient, newPatientEntry, NonSensitivePatientEntry } from "../types";

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
  return patients;
};

// te man bija Patient[], tas īsti negāja cauri
const addPatient = (patient: newPatientEntry): Patient => {
  const newPatient = {
    id: (patients.map((p) => p.id).length + 1).toString(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, occupation, gender, dateOfBirth }) => ({
    id,
    name,
    occupation,
    gender,
    dateOfBirth,
  }));
};

export default {
  getPatients,
  getNonSensitiveEntries,
  addPatient,
};
