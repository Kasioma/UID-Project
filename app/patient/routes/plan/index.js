import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Menu from "../../components/menu";
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

const taskList = [
  { title: "Task 1", status: true },
  { title: "Task 2", status: false },
  { title: "Task 3", status: false },
  { title: "Task 4", status: false },
  { title: "Task 5", status: true },
  { title: "Task 6", status: false },
  { title: "Task 7", status: false },
  { title: "Task 8", status: false },
];

const App = () => {
  const [completed, setCompleted] = useState(taskList);
  const [clickedTask, setClickedTask] = useState(null);

  const handleTaskCompletion = (title) => {
    setCompleted((prev) =>
      prev.map((task) =>
        task.title === title ? { ...task, status: true } : task
      )
    );
    setClickedTask(null);
  };

  const handleLaterTask = () => {
    setClickedTask(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <Menu FirstName={data.FirstName} />

        <View className="flex w-full items-center my-5">
          <Text className="underline text-[#013a5e] text-3xl">Care Plan</Text>
        </View>

        <View className="flex items-center w-3/4 mx-auto">
          <ScrollView
            contentContainerStyle={{ paddingVertical: 10 }}
            className="w-full  rounded-lg"
            style={{ maxHeight: "80%" }}
            showsVerticalScrollIndicator={false}
          >
            {completed.map((task, index) => (
              <TouchableOpacity
                className="flex flex-row items-center gap-3 p-3 border-b border-[#87284e]"
                key={index}
                onPress={() => setClickedTask(task)}
              >
                {task.status ? (
                  <Checkmark className="text-[#87284e] text-3xl" />
                ) : (
                  <Square className="text-[#87284e] text-3xl" />
                )}
                <Text className="text-2xl text-[#013a5e]">{task.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {clickedTask ? (
          <View className="p-4 w-3/4 mx-auto border border-[#87284e] rounded-lg bg-[#fce8e6]">
            <Text className="text-2xl text-[#013a5e] mx-auto mb-4">
              Did you do {clickedTask.title} ?
            </Text>
            <View className="flex flex-row justify-between items-center gap-2 my-4">
              <TouchableOpacity
                className="bg-[#87284e] rounded-lg p-2 w-1/4 mx-auto"
                onPress={() => handleTaskCompletion(clickedTask.title)}
              >
                <Text className="text-base text-white text-center font-bold">
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#87284e] rounded-lg p-2 w-1/4 mx-auto"
                onPress={() => handleLaterTask()}
              >
                <Text className="text-base text-white text-center font-bold">
                  Later
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
