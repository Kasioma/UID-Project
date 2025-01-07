import React from "react";
import { createContext, useState } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);
  const [allPatients, setAllPatients] = useState(null);

  return (
    <PatientContext.Provider
      value={{ patient, setPatient, allPatients, setAllPatients }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export { PatientContext, PatientProvider };
