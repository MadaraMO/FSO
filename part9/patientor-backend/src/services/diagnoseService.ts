/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import diagnoseData from "../../data/diagnoses.json";
import { DiagnoseEntry } from "../types";

const diagnoses: DiagnoseEntry[] = diagnoseData;

const getDiagnoses = (): DiagnoseEntry[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
