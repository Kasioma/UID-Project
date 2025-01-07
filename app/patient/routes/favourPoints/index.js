import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Menu from "../../components/menu";

const data = {
  id: 1,
  FirstName: "John",
  LastName: "Doe",
  Age: "30",
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

const data2 = {
  favourPoints: 150,
  medicine: ["Aspirin 15%", "Paracetamol 20%", "Ibuprofen 10%"],
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <Menu FirstName={data.FirstName} />

        <View className="flex w-full items-center my-5">
          <Text className="underline text-[#013a5e] text-3xl">
            Favour Points
          </Text>
        </View>

        <View className="w-40 h-40 rounded-full bg-pink-200 border-4 border-pink-500 justify-center items-center mx-auto my-5">
          <Text className="text-[#013a5e] text-3xl font-bold">
            {data2.favourPoints} p
          </Text>
        </View>

        <View className="flex w-full items-center my-5">
          <Text className="text-2xl font-bold text-[#87284e]">
            Medication Sales
          </Text>
          {data2.medicine.map((item, index) => (
            <Text key={index} className="text-xl  text-[#013a5e] mt-2">
              {item}
            </Text>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;