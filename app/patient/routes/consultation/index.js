import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
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

const App = () => {
  const [form, setForm] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <Menu FirstName={data.FirstName} />

        <View className="flex w-full items-center my-5">
          <Text className="underline text-[#013a5e] text-3xl">
            Consultation Form
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="flex p-4"
          style={{ maxHeight: 300 }}
        >
          <View className="w-full border border-[#87284e] rounded-lg p-2 bg-[#fff8f7] mb-4">
            <TextInput
              className="text-base text-[#013a5e] p-2 h-40"
              multiline
              value={form}
              onChangeText={(text) => setForm(text)}
              placeholder="Write the consultation form here..."
              textAlignVertical="top"
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          className="bg-[#87284e] rounded-lg p-4 mx-auto"
          onPress={() => setForm("")}
        >
          <Text className="text-white text-center font-bold text-xl">
            Send Request
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
