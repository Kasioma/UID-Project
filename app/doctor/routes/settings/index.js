import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import GeneralNameBar from "../../components/general/generalNameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";
import { useRouter } from "expo-router";
import Heart from "../../../public/heart";
import HeartLine from "../../../public/heartLine";
import Percentage from "../../../public/percentage";
import Ruler from "../../../public/ruler";
import Thermometer from "../../../public/thermometer";
import ChevronDown from "../../../public/chevronDown";

function App() {
  return <SettingsPage />;
}

const SettingsPage = () => {
  const router = useRouter();
  const { patient, setPatient, setAllPatients } = useContext(PatientContext);

  const [dropdownOpen, setDropdownOpen] = useState({
    heartRate: false,
    oxygen: false,
    bloodSugar: false,
    bloodPressure: false,
    respirationRate: false,
    temperature: false,
  });
  const [selectedValue, setSelectedValue] = useState({
    heartRate: null,
    oxygen: null,
    bloodSugar: null,
    bloodPressure: null,
    respirationRate: null,
    temperature: null,
  });

  const heartRateValues = [60, 70, 80, 90, 100, 110, 120, 130];
  const oxygenValues = [95, 96, 97, 98, 99, 100];
  const bloodSugarValues = [70, 80, 90, 100, 110, 120];
  const bloodPressureValues = [
    "120/80",
    "130/80",
    "140/80",
    "150/80",
    "160/80",
    "170/80",
  ];
  const respirationRateValues = [12, 14, 16, 18, 20, 22];
  const temperatureValues = [36.5, 37.0, 37.5, 38.0, 38.5];

  const toggleDropdown = (field) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleItemSelect = (value, field) => {
    setSelectedValue((prevState) => ({ ...prevState, [field]: value }));
    setDropdownOpen((prevState) => ({ ...prevState, [field]: false }));
    setPatient((prevPatient) => ({
      ...prevPatient,
      [field]: value,
    }));
    setAllPatients((prevAllPatients) =>
      prevAllPatients.map((item) =>
        item.id === patient.id ? { ...item, [field]: value } : item
      )
    );
  };

  const closeModal = () => {
    setDropdownOpen({
      heartRate: false,
      oxygen: false,
      bloodSugar: false,
      bloodPressure: false,
      respirationRate: false,
      temperature: false,
    });
  };

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
            Route="Settings"
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
                {selectedValue.heartRate ?? patient.heartRate}
              </Text>
              <TouchableOpacity onPress={() => toggleDropdown("heartRate")}>
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>

            {dropdownOpen.heartRate && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.heartRate}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {heartRateValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleItemSelect(value, "heartRate")}
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value} bpm
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
          </View>
          <View className="flex flex-col items-center justify-center gap-5">
            <Text className="text-4xl text-[#013a5e] underline">Oxygen</Text>
            <View className="flex flex-row items-center justify-center gap-3">
              <Text className="text-4xl text-[#87284e] font-bold">
                {selectedValue.oxygen ?? patient.oxygen} %
              </Text>
              <TouchableOpacity onPress={() => toggleDropdown("oxygen")}>
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>
            {dropdownOpen.oxygen && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.oxygen}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {oxygenValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleItemSelect(value, "oxygen")}
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value} %
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
          </View>
          <View className="flex flex-col items-center justify-center gap-5">
            <Text className="text-4xl text-[#013a5e] underline">
              Blood Sugar
            </Text>
            <View className="flex flex-row items-center justify-center gap-3">
              <Ruler className={`text-[#87284e] text-4xl`} />
              <Text className="text-4xl text-[#87284e] font-bold">
                {selectedValue.bloodSugar ?? patient.bloodSugar}
              </Text>
              <TouchableOpacity onPress={() => toggleDropdown("bloodSugar")}>
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>

            {dropdownOpen.bloodSugar && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.bloodSugar}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {bloodSugarValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              handleItemSelect(value, "bloodSugar")
                            }
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value} mg
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
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
                {selectedValue.bloodPressure ?? patient.bloodPressure}
              </Text>
              <TouchableOpacity onPress={() => toggleDropdown("bloodPressure")}>
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>

            {dropdownOpen.bloodPressure && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.bloodPressure}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {bloodPressureValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              handleItemSelect(value, "bloodPressure")
                            }
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
          </View>
          <View className="flex flex-col items-center justify-center gap-5">
            <Text className="text-4xl text-[#013a5e] underline">
              Respiration Rate
            </Text>
            <View className="flex flex-row items-center justify-center gap-3">
              <Percentage className={`text-[#87284e] text-4xl`} />
              <Text className="text-4xl text-[#87284e] font-bold">
                {selectedValue.respirationRate ?? patient.respirationRate}
              </Text>
              <TouchableOpacity
                onPress={() => toggleDropdown("respirationRate")}
              >
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>

            {dropdownOpen.respirationRate && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.respirationRate}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {respirationRateValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              handleItemSelect(value, "respirationRate")
                            }
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value} bpm
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
          </View>
          <View className="flex flex-col items-center justify-center gap-5">
            <Text className="text-4xl text-[#013a5e] underline">
              Temperature
            </Text>
            <View className="flex flex-row items-center justify-center gap-3">
              <Thermometer className={`text-[#87284e] text-4xl`} />
              <Text className="text-4xl text-[#87284e] font-bold">
                {selectedValue.temperature ?? patient.temperature}
              </Text>
              <TouchableOpacity onPress={() => toggleDropdown("temperature")}>
                <ChevronDown className="text-[#87284e] text-4xl" />
              </TouchableOpacity>
            </View>

            {dropdownOpen.temperature && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={dropdownOpen.temperature}
                onRequestClose={closeModal}
              >
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View className="flex-1 justify-end">
                    <View className="bg-white rounded-t-lg shadow-lg">
                      <ScrollView style={{ maxHeight: 200 }}>
                        {temperatureValues.map((value, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              handleItemSelect(value, "temperature")
                            }
                          >
                            <Text className="text-xl p-4 border-b border-gray-300">
                              {value} C'
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
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
};

export default App;
