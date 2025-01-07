import React, { useContext } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import NameBar from "../../components/profile/nameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";
import { useRouter } from "expo-router";
import Chat from "../../../public/chat";
import Stats from "../../../public/stats";
import Settings from "../../../public/settings";
import Alert from "../../../public/alert";
import File from "../../../public/file";

function App() {
  return <ProfilePage />;
}

const ProfilePage = () => {
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
            <NameBar
              FirstName={patient.FirstName}
              LastName={patient.LastName}
            />
          </View>
          <View className="bg-[#013a5e] h-[1px] w-3/4 mx-auto my-5" />
          <View className="flex flex-row w-3/4 mx-auto my-5 h-[50%] justify-around">
            <Image
              className="mb-2 border-3 border-[#a03a64] rounded-lg"
              source={patient.Picture}
              style={{
                width: "40%",
                height: "100%",
              }}
            />
            <View className="flex flex-col justify-center gap-3">
              <View className="flex flex-row items-center justify-center text-[#013a5e] gap-4">
                <Text className="text-2xl">
                  <Text className=" font-bold">Height: </Text>
                  {patient.height} cm
                </Text>
                <Text className="text-2xl">
                  <Text className=" font-bold">Weight: </Text>
                  {patient.weight} Kg
                </Text>
              </View>
              <Text className="text-2xl">
                <Text className=" font-bold">Age: </Text>
                {patient.age} yrs
              </Text>
              <Text className="text-2xl">
                <Text className=" font-bold">Condition: </Text>
                {patient.condition}
              </Text>
              <Text className="text-2xl">
                <Text className=" font-bold">Treatment: </Text>
                {patient.treatment} days
              </Text>
            </View>
          </View>
          <View className="flex flex-col gap-10 w-3/4 mx-auto mt-7">
            <View className="flex flex-row justify-around">
              <TouchableOpacity
                className="bg-[#87284e] rounded-full px-4 py-3 w-1/6 mx-auto my-5 flex-row justify-center items-center gap-3"
                onPress={() => {
                  router.push("/doctor/routes/plan");
                }}
              >
                <Chat className={`text-[#fff6f6] text-xl font-bold`} />
                <Text className="text-[#fff6f6] text-xl font-bold">Plan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#87284e] rounded-full px-4 py-3 w-1/6 mx-auto my-5 flex-row justify-center items-center gap-3"
                onPress={() => {
                  router.push("/doctor/routes/stats");
                }}
              >
                <Stats className={`text-[#fff6f6] text-xl font-bold`} />
                <Text className="text-[#fff6f6] text-xl font-bold">Stats</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#87284e] rounded-full px-4 py-3 w-1/6 mx-auto my-5 flex-row justify-center items-center gap-3"
                onPress={() => {
                  router.push("/doctor/routes/settings");
                }}
              >
                <Settings className={`text-[#fff6f6] text-xl font-bold`} />
                <Text className="text-[#fff6f6] text-xl font-bold">
                  Settings
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-around">
              <TouchableOpacity
                className="bg-[#87284e] rounded-full px-4 py-3 w-1/6 mx-auto my-5 flex-row justify-center items-center gap-3"
                onPress={() => {
                  router.push("/doctor/routes/alerts");
                }}
              >
                <Alert className={`text-[#fff6f6] text-xl font-bold`} />
                <Text className="text-[#fff6f6] text-xl font-bold">Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-[#87284e] rounded-full px-4 py-3 w-1/6 mx-auto my-5 flex-row justify-center items-center gap-3"
                onPress={() => {
                  router.push("/doctor/routes/archive");
                }}
              >
                <File className={`text-[#fff6f6] text-xl font-bold`} />
                <Text className="text-[#fff6f6] text-xl font-bold">
                  Archive
                </Text>
              </TouchableOpacity>
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
