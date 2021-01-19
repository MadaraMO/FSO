// viena no ieteiktajām lietām,
// lai atrisinātu JSX element type
// ['BrowserRouter', 'Table', 'Button' etc] is not a constructor function for JSX elements.
// šis nepalīdzēja, taču tāpat atstāju.
// palīdzēja - yarn.lock un node_modules izdzēšana un atjaunošana. MILZĪGS LAIKA ZAGLIS
import * as React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";
import { useStateValue } from "./state";
import { Patient, Diagnosis } from "./types";

import PatientListPage from "./PatientListPage";
import PatientPage from "./PatientPage";

import { setPatientList, setDiagnosesList } from "./state/reducer";

const App: React.FC = () => {
  const [{ diagnosis }, dispatch] = useStateValue();
  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };

    fetchPatientList();

    const fetchDiagnosesList = async () => {
      try {
        const { data: diagnosesListFromApi } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnosis`
        );
        dispatch(setDiagnosesList(diagnosesListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchDiagnosesList();
  }, [dispatch, diagnosis]);

  
  // VISPĀR SĀKUMĀ ES GRIBĒJU FETCHOT SINGLEPATIENT DATA NO APP.TSX

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id" component={PatientPage} />
            {/* Bija iekritiens. Ar šo zemāk man neizdevās iegūt view, ar to augstāk, ko norakstīju, izdevās. ReactRouter knifi? */}
            {/* <Route path="patients/:id" render={() => <PatientPage />} /> */}
            <Route exact path="/" render={() => <PatientListPage />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
