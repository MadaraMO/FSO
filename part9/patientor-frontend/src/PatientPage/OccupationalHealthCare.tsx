import React from "react";
import { OccupationalHealthcareEntry, Diagnosis } from "../types";
// import DiagnosisList from "./";
import { useStateValue } from "../state";

const OccupationalHealthCare: React.FC<{
  entry: OccupationalHealthcareEntry;
  code?: Array<Diagnosis["code"]>;
}> = ({ entry, code }) => {
  const [{ diagnosis }] = useStateValue();
  return (
    <section>
      <p>
        {entry.date} {entry.description} By: {entry.specialist}
      </p>
      {/* <DiagnosisList key={entry.id} code={code} /> */}
      <ul>
        {code?.map((code) => (
          <li key={code}>
            {code}: {diagnosis.name}
          </li>
        ))}
      </ul>
      <p>Employer name: {entry.employerName}</p>
    </section>
  );
};

export default OccupationalHealthCare;
