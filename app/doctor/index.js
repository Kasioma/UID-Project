import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import SearchBar from "./components/dashboard/searchBar";
import List from "../public/list";
import ChevronUp from "../public/chevronUp";
import ChevronDown from "../public/chevronDown";
import Card from "./components/dashboard/card";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { PatientContext } from "../global/patientProvider";
const data = [
  {
    id: 1,
    FirstName: "John",
    LastName: "Doe",
    Age: "30",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
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
  },
  {
    id: 2,
    FirstName: "Jane",
    LastName: "Smith",
    Age: "28",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 165,
    weight: 68,
    condition: "Good",
    treatment: 5,
    plan: "Exercise regularly",
    alerts: [],
    heartRate: 88,
    oxygen: 97,
    bloodSugar: 90,
    bloodPressure: "110/70",
    respirationRate: 18,
    temperature: 36.8,
  },
  {
    id: 3,
    FirstName: "Michael",
    LastName: "Brown",
    Age: "35",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 175,
    weight: 80,
    condition: "Fair",
    treatment: 12,
    plan: "Consult with a nutritionist",
    alerts: [],
    heartRate: 105,
    oxygen: 94,
    bloodSugar: 120,
    bloodPressure: "120/85",
    respirationRate: 15,
    temperature: 37.2,
  },
  {
    id: 4,
    FirstName: "Emily",
    LastName: "Johnson",
    Age: "22",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 170,
    weight: 60,
    condition: "Good",
    treatment: 8,
    plan: "Continue fitness regimen",
    alerts: [],
    heartRate: 95,
    oxygen: 98,
    bloodSugar: 85,
    bloodPressure: "115/75",
    respirationRate: 17,
    temperature: 36.7,
  },
  {
    id: 5,
    FirstName: "David",
    LastName: "Lee",
    Age: "29",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 182,
    weight: 85,
    condition: "Excellent",
    treatment: 6,
    plan: "Maintain healthy lifestyle",
    alerts: [],
    heartRate: 98,
    oxygen: 96,
    bloodSugar: 105,
    bloodPressure: "102/68",
    respirationRate: 14,
    temperature: 36.9,
  },
  {
    id: 6,
    FirstName: "Sophia",
    LastName: "Clark",
    Age: "24",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 160,
    weight: 55,
    condition: "Good",
    treatment: 4,
    plan: "Reduce stress",
    alerts: [],
    heartRate: 90,
    oxygen: 97,
    bloodSugar: 92,
    bloodPressure: "110/72",
    respirationRate: 16,
    temperature: 37.1,
  },
  {
    id: 7,
    FirstName: "Daniel",
    LastName: "Martinez",
    Age: "33",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 185,
    weight: 90,
    condition: "Fair",
    treatment: 15,
    plan: "Improve exercise routine",
    alerts: [],
    heartRate: 110,
    oxygen: 94,
    bloodSugar: 115,
    bloodPressure: "130/85",
    respirationRate: 18,
    temperature: 36.5,
  },
  {
    id: 8,
    FirstName: "Olivia",
    LastName: "Garcia",
    Age: "27",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 162,
    weight: 58,
    condition: "Good",
    treatment: 9,
    plan: "Maintain mental clarity",
    alerts: [],
    heartRate: 92,
    oxygen: 96,
    bloodSugar: 100,
    bloodPressure: "110/76",
    respirationRate: 17,
    temperature: 36.8,
  },
  {
    id: 9,
    FirstName: "James",
    LastName: "Harris",
    Age: "31",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 178,
    weight: 77,
    condition: "Excellent",
    treatment: 11,
    plan: "Continue current treatment",
    alerts: [],
    heartRate: 95,
    oxygen: 98,
    bloodSugar: 105,
    bloodPressure: "125/80",
    respirationRate: 15,
    temperature: 37.3,
  },
  {
    id: 10,
    FirstName: "Mia",
    LastName: "Davis",
    Age: "25",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 168,
    weight: 63,
    condition: "Good",
    treatment: 7,
    plan: "Focus on healthy eating",
    alerts: [],
    heartRate: 87,
    oxygen: 97,
    bloodSugar: 95,
    bloodPressure: "118/76",
    respirationRate: 16,
    temperature: 36.9,
  },
  {
    id: 11,
    FirstName: "William",
    LastName: "Wilson",
    Age: "34",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 190,
    weight: 95,
    condition: "Fair",
    treatment: 14,
    plan: "Check blood pressure regularly",
    alerts: [],
    heartRate: 108,
    oxygen: 93,
    bloodSugar: 125,
    bloodPressure: "135/90",
    respirationRate: 20,
    temperature: 36.7,
  },
  {
    id: 12,
    FirstName: "Isabella",
    LastName: "Taylor",
    Age: "21",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 158,
    weight: 52,
    condition: "Good",
    treatment: 3,
    plan: "Maintain hydration",
    alerts: [],
    heartRate: 85,
    oxygen: 99,
    bloodSugar: 88,
    bloodPressure: "110/70",
    respirationRate: 15,
    temperature: 36.8,
  },
  {
    id: 13,
    FirstName: "John",
    LastName: "Doe",
    Age: "30",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
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
  },
  {
    id: 14,
    FirstName: "Jane",
    LastName: "Smith",
    Age: "28",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 165,
    weight: 68,
    condition: "Good",
    treatment: 5,
    plan: "Exercise regularly",
    alerts: [],
    heartRate: 88,
    oxygen: 97,
    bloodSugar: 90,
    bloodPressure: "110/70",
    respirationRate: 18,
    temperature: 36.8,
  },
  {
    id: 15,
    FirstName: "Michael",
    LastName: "Brown",
    Age: "35",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 175,
    weight: 80,
    condition: "Fair",
    treatment: 12,
    plan: "Consult with a nutritionist",
    alerts: [],
    heartRate: 105,
    oxygen: 94,
    bloodSugar: 120,
    bloodPressure: "120/85",
    respirationRate: 15,
    temperature: 37.2,
  },
  {
    id: 16,
    FirstName: "Emily",
    LastName: "Johnson",
    Age: "22",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 170,
    weight: 60,
    condition: "Good",
    treatment: 8,
    plan: "Continue fitness regimen",
    alerts: [],
    heartRate: 95,
    oxygen: 98,
    bloodSugar: 85,
    bloodPressure: "115/75",
    respirationRate: 17,
    temperature: 36.7,
  },
  {
    id: 17,
    FirstName: "David",
    LastName: "Lee",
    Age: "29",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 182,
    weight: 85,
    condition: "Excellent",
    treatment: 6,
    plan: "Maintain healthy lifestyle",
    alerts: [],
    heartRate: 98,
    oxygen: 96,
    bloodSugar: 105,
    bloodPressure: "102/68",
    respirationRate: 14,
    temperature: 36.9,
  },
  {
    id: 18,
    FirstName: "Sophia",
    LastName: "Clark",
    Age: "24",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 160,
    weight: 55,
    condition: "Good",
    treatment: 4,
    plan: "Reduce stress",
    alerts: [],
    heartRate: 90,
    oxygen: 97,
    bloodSugar: 92,
    bloodPressure: "110/72",
    respirationRate: 16,
    temperature: 37.1,
  },
  {
    id: 19,
    FirstName: "Daniel",
    LastName: "Martinez",
    Age: "33",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 185,
    weight: 90,
    condition: "Fair",
    treatment: 15,
    plan: "Improve exercise routine",
    alerts: [],
    heartRate: 110,
    oxygen: 94,
    bloodSugar: 115,
    bloodPressure: "130/85",
    respirationRate: 18,
    temperature: 36.5,
  },
  {
    id: 20,
    FirstName: "Olivia",
    LastName: "Garcia",
    Age: "27",
    Picture: require("../public/blank-profile-picture-973460_1280-1030x1030-1612603967.png"),
    height: 162,
    weight: 58,
    condition: "Good",
    treatment: 9,
    plan: "Maintain mental clarity",
    alerts: [],
    heartRate: 92,
    oxygen: 96,
    bloodSugar: 100,
    bloodPressure: "110/76",
    respirationRate: 17,
    temperature: 36.8,
  },
];

function App() {
  return <MainPage />;
}

const MainPage = () => {
  const router = useRouter();
  const { setPatient, setAllPatients, allPatients } =
    useContext(PatientContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [nameOrder, setNameOrder] = useState(true);
  const [ageOrder, setAgeOrder] = useState(true);
  const [usedData, setUsedData] = useState(data);

  const handleNameOrder = () => {
    const sortedData = [...usedData].sort((a, b) =>
      nameOrder
        ? a.LastName.localeCompare(b.LastName)
        : b.LastName.localeCompare(a.LastName)
    );
    setUsedData(sortedData);
    setNameOrder(!nameOrder);
  };

  const handleAgeOrder = () => {
    const sortedData = [...usedData].sort((a, b) =>
      ageOrder ? a.Age - b.Age : b.Age - a.Age
    );
    setUsedData(sortedData);
    setAgeOrder(!ageOrder);
  };

  const renderItem = ({ item }) => (
    <View
      className="flex-1 max-w-[20%] items-center mx-6"
      onClick={() => {
        if (!allPatients) {
          setPatient(item);
          setAllPatients(data);
        } else {
          const newItem = allPatients.filter(
            (patient) => patient.id === item.id
          );
          setPatient(newItem[0]);
        }
        router.push("/doctor/routes/profile");
      }}
    >
      <Card
        FirstName={item.FirstName}
        LastName={item.LastName}
        Age={item.Age}
        Picture={item.Picture}
      />
    </View>
  );

  const searchByName = (name) => {
    const searchTerms = name
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 0);

    const newData = [...data].filter((item) => {
      const firstNameMatch =
        searchTerms[0] &&
        item.FirstName.toLowerCase().includes(searchTerms[0].toLowerCase());
      const lastNameMatch =
        (searchTerms[1] &&
          item.LastName.toLowerCase().includes(searchTerms[1].toLowerCase())) ||
        (searchTerms[0] &&
          item.LastName.toLowerCase().includes(searchTerms[0].toLowerCase()));

      if (searchTerms.length === 1) {
        return firstNameMatch || lastNameMatch;
      }

      if (searchTerms.length === 2) {
        return firstNameMatch && lastNameMatch;
      }

      return false;
    });
    setUsedData(searchQuery ? newData : data);
  };

  useEffect(() => {
    searchByName(searchQuery);
  }, [searchQuery]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#fce8e6]">
        <View className="p-4">
          <SearchBar onSearch={(query) => setSearchQuery(query)} />
        </View>

        <View className="px-4 mb-4 w-3/4 mx-auto my-5">
          <View className="flex flex-row justify-between">
            <List />
            <View className="flex flex-row items-center gap-5">
              <View
                className="flex flex-row justify-center items-center gap-1"
                onClick={handleNameOrder}
              >
                <Text>Name</Text>
                {nameOrder ? (
                  <ChevronUp className="text-[#013a5e]" />
                ) : (
                  <ChevronDown className="text-[#013a5e]" />
                )}
              </View>
              <View
                className="flex flex-row justify-center items-center gap-1"
                onClick={handleAgeOrder}
              >
                <Text>Age</Text>
                {ageOrder ? (
                  <ChevronUp className="text-[#013a5e]" />
                ) : (
                  <ChevronDown className="text-[#013a5e]" />
                )}
              </View>
            </View>
          </View>
          <View className="bg-[#013a5e] h-[1px] w-full" />
        </View>

        <FlatList
          className="w-3/4 mx-auto"
          data={usedData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          contentContainerStyle={{ padding: 10 }}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
