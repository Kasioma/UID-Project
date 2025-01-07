import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Menu from "../../components/menu";
import Person from "../../../public/person";
import Phone from "../../../public/phone";

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

const captions = "Random Captions played during the call";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <Menu FirstName={data.FirstName} />

        <View className="flex w-3/4 items-center my-10 mx-auto p-20 border border-[#87284e] rounded-lg bg-[#faf2ef]">
          <Person className={`text-[#87284e] text-8xl`} />
        </View>

        <View className="flex flex-row justify-around items-center gap-2">
          <TouchableOpacity className="bg-green-500 rounded-full p-4 w-16 h-16 justify-center items-center">
            <Phone className="text-[#fce8e6] text-3xl" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-500 rounded-full p-4 w-16 h-16 justify-center items-center">
            <Phone className="text-[#fce8e6] text-3xl" />
          </TouchableOpacity>
        </View>

        <Text className="absolute bottom-20 self-center text-2xl underline text-[#013a5e] w-3/4">
          {captions}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;