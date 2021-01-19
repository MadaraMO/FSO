import React from "react";
import { useStateValue } from "../state";
import { Diagnosis } from "../types";

const DiagnosisList: React.FC<{ code?: string }> = ({ code }) => {
  const [{ diagnosis }] = useStateValue();

  return (
    // <ul>
    //   {code?.map((code) => (
    //     <li key={code}>
    //        {code}: {diagnosis.name}
    //     </li>
    //   ))}
    // </ul>

    <li>
     {code}: {diagnosis.name}
    </li>
  );
};

export default DiagnosisList;
