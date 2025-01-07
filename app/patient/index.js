import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Menu from "./components/menu";
import PatientInfo from "./components/main/stats";

const data = {
  id: 1,
  FirstName: "John",
  LastName: "Doe",
  Age: "30",
  Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
  height: 180,
  weight: 75,
  condition: "Excellent",
  treatment: 10,
  plan: "Maintain health",
  alerts: [],
  heartRate: 100,
  oxygen: 95,
  bloodSugar: 110,
  bloodPressure: "100/80",
  respirationRate: 16,
  temperature: 37,
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Menu FirstName={data.FirstName} />
        <PatientInfo patient={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
