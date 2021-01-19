import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Patient, Entry } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import { setSinglePatient } from "../state/reducer";
import Entries from "./";

import { Icon } from "semantic-ui-react";

const PatientPage: React.FC<{ entry: Entry }> = () => {
  const [{ singlePatient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchSinglePatient = async () => {
      try {
        const { data: singlePatient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setSinglePatient(singlePatient));
      } catch (e) {
        console.error(e);
      }
    };

    fetchSinglePatient();
  }, [dispatch, id, singlePatient]);

  // baigi nečakarējos, pārkopēju, pielāgoju. gribēju izmēģināt ikonas:
  const IconByGender = () => {
    if (singlePatient?.gender === "male") {
      return <Icon name="mars"></Icon>;
    } else if (singlePatient?.gender === "female") {
      return <Icon name="venus"></Icon>;
    } else {
      return <Icon name="other gender"></Icon>;
    }
  };

  return (
    <section>
      {/* Te bija iekritiens. Nebija view. Beigās jautājuma zīmi norakastīju. jo ienāk kā undefined */}
      <h2>
        {singlePatient?.name} {IconByGender()}
      </h2>
      <h3>{singlePatient?.occupation}</h3>
      <p>{singlePatient?.ssn}</p>
      <h3>Entries</h3>
      {/* <Entries /> */}
      {/* <Entries entry={singlePatient} /> */}

      {singlePatient?.entries.map((entry: Entry) => (
        // <Entries key={entry.id} />
        <div key={entry.id}>
          <p>
            {entry.date} {entry.description} By: {entry.specialist}
          </p>
          <Entries entry={entry} />
        </div>
      ))}

      {/* bez entry={entry} */}
      {/* {singlePatient?.entries.map((entry) => (
        // <Entries key={entry.id} />
        <Entries key={entry.id} />
      ))} */}
    </section>
  );
};

export default PatientPage;
