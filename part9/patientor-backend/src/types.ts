export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}
// export interface Entry {

// }

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export type NonSensitivePatientEntry = Omit<Patient, "ssn">;

export type newPatientEntry = Omit<Patient, "id">;
// nekur vēl neizmantoju
export type PublicPatient = Omit<Patient, "ssn" | "entries">;