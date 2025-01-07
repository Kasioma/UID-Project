import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import GeneralNameBar from "../../components/general/generalNameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";
import { useRouter } from "expo-router";

function App() {
  return <PlanPage />;
}

const PlanPage = () => {
  const router = useRouter();
  const { patient, setPatient, allPatients, setAllPatients } =
    useContext(PatientContext);
  const [plan, setPlan] = useState(patient.plan);

  const handleSavePlan = () => {
    const newItem = patient;
    newItem.plan = plan;
    const newData = [...allPatients];
    newData.map((item) => {
      if (item.id === newItem.id) {
        item = newItem;
      }
    });
    setAllPatients(newData);
    setPatient(newItem);
    router.back();
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
              Route="Plan"
            />
          </View>
          <View className="bg-[#013a5e] h-[1px] w-3/4 mx-auto my-5" />
          <KeyboardAvoidingView
            behavior="padding"
            className="flex-1 bg-[#fce8e6] w-3/4 mx-auto my-5 border border-[#013a5e] rounded-lg"
          >
            <TouchableWithoutFeedback>
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                className="flex flex-1 p-4"
              >
                <Text className="text-2xl font-bold text-[#013a5e] underline text-center mb-4">
                  Care Plan
                </Text>

                <View className="w-full border border-[#87284e] rounded-lg p-2 bg-[#fff8f7] mb-4">
                  <TextInput
                    className="text-base text-[#013a5e] p-2 h-40"
                    multiline
                    value={plan}
                    onChangeText={(text) => setPlan(text)}
                    placeholder="Write the care plan here..."
                    textAlignVertical="top"
                  />
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View className="mt-auto">
            <View className="w-1/2 mx-auto">
              <Button
                title="Save Care Plan"
                onPress={() => handleSavePlan()}
                color="#87284e"
              />
            </View>
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