import React from "react";
import { HospitalEntry, Diagnosis } from "../types";
// import DiagnosisList from "./";
import { useStateValue } from "../state";

const Hospital: React.FC<{ entry: HospitalEntry; code?: Array<Diagnosis["code"]> }> = ({
  entry, code
}) => {
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
      <p>Discharged on {entry.discharge?.date}</p>
    </section>
  );
};

export default Hospital;
