import { Stack } from "expo-router";
import { PatientProvider } from "../global/patientProvider";

const Layout = () => {
  return (
    <PatientProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </PatientProvider>
  );
};

export default Layout;
