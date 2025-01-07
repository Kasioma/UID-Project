import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import GeneralNameBar from "../../components/general/generalNameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";
import { useRouter } from "expo-router";
import Heart from "../../../public/heart";
import HeartLine from "../../../public/heartLine";
import Percentage from "../../../public/percentage";
import Ruler from "../../../public/ruler";
import Thermometer from "../../../public/thermometer";

function App() {
  return <StatsPage />;
}

const StatsPage = () => {
  const router = useRouter();
  const { patient } = useContext(PatientContext);

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
              Route="Stats"
            />
          </View>
          <View className="bg-[#013a5e] h-[1px] w-3/4 mx-auto my-5" />
          <View className="flex flex-row w-3/4 mx-auto my-5 h-[50%] justify-around">
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">
                Heart Rate
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <Heart className={`text-[#87284e] text-4xl`} />
                <Text className="text-4xl text-[#87284e] font-bold">
                  {patient.heartRate}
                </Text>
              </View>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">Oxygen</Text>
              <Text className="text-4xl text-[#87284e] font-bold">
                {patient.oxygen} %
              </Text>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">
                Blood Sugar
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <Ruler className={`text-[#87284e] text-4xl`} />
                <Text className="text-4xl text-[#87284e] font-bold">
                  {patient.bloodSugar}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row w-3/4 mx-auto my-5 h-[50%] justify-around">
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">
                Blood Pressure
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <HeartLine className={`text-[#87284e] text-4xl`} />
                <Text className="text-4xl text-[#87284e] font-bold">
                  {patient.bloodPressure}
                </Text>
              </View>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">
                Respiration Rate
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <Percentage className={`text-[#87284e] text-4xl`} />
                <Text className="text-4xl text-[#87284e] font-bold">
                  {patient.respirationRate}
                </Text>
              </View>
            </View>
            <View className="flex flex-col items-center justify-center gap-5">
              <Text className="text-4xl text-[#013a5e] underline">
                Temperature
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <Thermometer className={`text-[#87284e] text-4xl`} />
                <Text className="text-4xl text-[#87284e] font-bold">
                  {patient.temperature}
                </Text>
              </View>
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
