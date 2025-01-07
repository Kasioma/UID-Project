import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import GeneralNameBar from "../../components/general/generalNameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";
import { useRouter } from "expo-router";

function App() {
  return <AlertPage />;
}

const AlertPage = () => {
  const router = useRouter();
  const { patient, setPatient, allPatients, setAllPatients } =
    useContext(PatientContext);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");

  const handleAlertPush = () => {
    if (title !== "") {
      if (validateDate(date) && validateTime(time)) {
        const newAlert = {
          title: title,
          date: date,
          time: time,
        };
        const updatedPatient = {
          ...patient,
          alerts: [...patient.alerts, newAlert],
        };

        const updateAllPatients = [...allPatients].map((item) =>
          item.id === patient.id ? updatedPatient : item
        );

        setAllPatients(updateAllPatients);
        setPatient(updatedPatient);

        setTitle("");
        setTime("");
        setDate("");
      } else {
        const message = "Invalid Date or Time. Please check your input.";
        if (Platform.OS === "web") {
          alert(message);
        } else {
          Alert.alert("Validation Error", message, [{ text: "OK" }]);
        }
      }
    } else {
      const message = "Title is required. Please enter a title.";
      if (Platform.OS === "web") {
        alert(message);
      } else {
        Alert.alert("Validation Error", message, [{ text: "OK" }]);
      }
    }
  };

  const validateDate = (date) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

    if (!dateRegex.test(date)) {
      return false;
    }

    const [day, month, year] = date.split("/").map(Number);

    const isValidDate = (day, month, year) => {
      const daysInMonth = new Date(year, month, 0).getDate();
      return day > 0 && day <= daysInMonth;
    };

    return isValidDate(day, month, year);
  };

  const validateTime = (time) => {
    const timeRegex = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;

    return timeRegex.test(time);
  };

  {
    return patient ? (
      <SafeAreaProvider>
        <SafeAreaView>
          <View className="flex-row w-3/4 mx-auto my-5">
            <View
              onClick={() => {
                router.back();
              }}
              className="flex justify-center items-center"
            >
              <BackArrow className="text-[#a03a64] text-4xl" />
            </View>
            <GeneralNameBar
              FirstName={patient.FirstName}
              LastName={patient.LastName}
              Route="Alert"
            />
          </View>
          <View className="bg-[#013a5e] h-[1px] w-3/4 mx-auto my-5" />
          <View className="flex-1 bg-[#fce8e6] w-3/4 mx-auto my-5 border border-[#013a5e] rounded-lg">
            <Text className="text-2xl font-bold text-[#013a5e] underline text-center my-4">
              Care Plan
            </Text>
            <ScrollView className="flex flex-1 p-4 border border-[#87284e] rounded-lg bg-[#fff8f7] mb-4 w-11/12 mx-auto">
              <Text
                className="text-base text-[#013a5e] p-2 h-40"
                textAlignVertical="top"
              >
                {patient.plan}
              </Text>
            </ScrollView>
          </View>
          <View className="mt-auto p-4 w-1/2 mx-auto border border-[#87284e] rounded-lg bg-[#fce8e6]">
            <View className="w-1/4 mx-auto mb-4">
              <TextInput
                className="text-base text-[#013a5e] p-2 border-b border-[#013a5e] text-center"
                placeholder="Enter Title"
                value={title}
                onChangeText={setTitle}
                placeholderTextColor="#013a5e"
              />
            </View>

            <View className="w-3/4 mx-auto flex flex-row justify-between items-center mb-4 gap-2">
              <TextInput
                className="flex-1 text-base text-[#87284e] p-2 border border-[#013a5e] rounded-lg text-center"
                placeholder="dd/mm/yyyy"
                value={date}
                onChangeText={setDate}
                placeholderTextColor="#013a5e"
              />
              <TextInput
                className="flex-1 text-base text-[#87284e] p-2 border border-[#013a5e] rounded-lg text-center"
                placeholder="hh:mm"
                value={time}
                onChangeText={setTime}
                placeholderTextColor="#013a5e"
              />
            </View>

            <TouchableOpacity
              className="bg-[#87284e] rounded-lg p-2 w-1/4 mx-auto"
              onPress={() => handleAlertPush()}
            >
              <Text className="text-base text-[#fce8e6] text-center font-bold">
                Set
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    ) : (
      <SafeAreaProvider>
        <SafeAreaView>
          <Text>Loading . . .</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
};

export default App;
