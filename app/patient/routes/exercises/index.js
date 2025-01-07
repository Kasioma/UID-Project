import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Menu from "../../components/menu";
import Pause from "../../../public/pause";
import Square from "../../../public/square";
import Checkmark from "../../../public/checkmark";

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

const exercises = [
  { title: "Exercise 1", status: true },
  { title: "Exercise 2", status: false },
  { title: "Exercise 3", status: false },
  { title: "Exercise 4", status: false },
  { title: "Exercise 5", status: true },
  { title: "Exercise 6", status: false },
  { title: "Exercise 7", status: false },
  { title: "Exercise 8", status: false },
];

const App = () => {
  const [completed, setCompleted] = useState(exercises);
  const [clickedExercise, setClickedExercise] = useState(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <Menu FirstName={data.FirstName} />

        <View className="flex w-3/4 items-center my-10 mx-auto p-10 border border-[#87284e] rounded-lg bg-[#faf2ef] ">
          <Pause className={`text-[#87284e] text-7xl mt-5`} />
          <View className="relative w-full mt-5 mb-5">
            <View className="bg-[#87284e] h-[2px] w-full absolute bottom-0" />
            <View className="absolute w-4 h-4 bg-[#87284e] rounded-full -translate-y-1/2 left-[50%]" />
          </View>
        </View>

        <View className="flex items-center w-3/4 mx-auto">
          <ScrollView
            contentContainerStyle={{ paddingVertical: 10 }}
            className="w-full  rounded-lg"
            style={{ maxHeight: "80%" }}
            showsVerticalScrollIndicator={false}
          >
            {completed.map((exercise, index) => (
              <TouchableOpacity
                className="flex flex-row items-center gap-3 p-3 border-b border-[#87284e]"
                key={index}
              >
                {exercise.status ? (
                  <Checkmark className="text-[#87284e] text-3xl" />
                ) : (
                  <Square className="text-[#87284e] text-3xl" />
                )}
                <Text className="text-2xl text-[#013a5e]">
                  {exercise.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;