import React from "react";
import { HealthCheckEntry, Diagnosis } from "../types";
import DiagnosisList from "./";
import { useStateValue } from "../state";

const HealthCheck: React.FC<{
  entry: HealthCheckEntry;
  // code?: Array<Diagnosis["code"]>;
}> = ({ entry }) => {
  // const [{ diagnosis }] = useStateValue();
  return (
    <section>
      {/* <p>
        {entry.date} {entry.description} By: {entry.specialist}
      </p> */}
      <ul>
        {entry.diagnosisCodes?.map(() => (
          <DiagnosisList key={entry.id} entry={entry} />
        ))}
      </ul>
      {/* <ul>s
        {code?.map((code) => (
          <li key={code}>
            {code}: {diagnosis.name}
          </li>
        ))}
      </ul> */}
      <p>Discharged on {entry?.healthCheckRating}</p>
    </section>
  );
};

export default HealthCheck;
