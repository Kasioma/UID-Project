import React from "react";
import { ScrollView, View, Text } from "react-native";
import Heart from "../../../public/heart";
import HeartLine from "../../../public/heartLine";
import Percentage from "../../../public/percentage";
import Ruler from "../../../public/ruler";
import Thermometer from "../../../public/thermometer";

const PatientInfo = ({ patient }) => {
  return (
    <View className="flex-1 bg-[#fff6f6]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1 flex-col px-4 py-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">Heart Rate</Text>
          <View className="flex flex-row items-center gap-2">
            <Heart className="text-[#87284e] text-4xl" />
            <Text className="text-4xl text-[#87284e] font-bold">
              {patient.heartRate}
            </Text>
          </View>
        </View>

        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">Oxygen</Text>
          <Text className="text-4xl text-[#87284e] font-bold">
            {patient.oxygen} %
          </Text>
        </View>

        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">Blood Sugar</Text>
          <View className="flex flex-row items-center gap-2">
            <Ruler className="text-[#87284e] text-4xl" />
            <Text className="text-4xl text-[#87284e] font-bold">
              {patient.bloodSugar}
            </Text>
          </View>
        </View>

        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">
            Blood Pressure
          </Text>
          <View className="flex flex-row items-center gap-2">
            <HeartLine className="text-[#87284e] text-4xl" />
            <Text className="text-4xl text-[#87284e] font-bold">
              {patient.bloodPressure}
            </Text>
          </View>
        </View>

        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">
            Respiration Rate
          </Text>
          <View className="flex flex-row items-center gap-2">
            <Percentage className="text-[#87284e] text-4xl" />
            <Text className="text-4xl text-[#87284e] font-bold">
              {patient.respirationRate}
            </Text>
          </View>
        </View>

        <View className="flex flex-col items-center gap-4 my-4">
          <Text className="text-4xl text-[#013a5e] underline">Temperature</Text>
          <View className="flex flex-row items-center gap-2">
            <Thermometer className="text-[#87284e] text-4xl" />
            <Text className="text-4xl text-[#87284e] font-bold">
              {patient.temperature}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientInfo;
