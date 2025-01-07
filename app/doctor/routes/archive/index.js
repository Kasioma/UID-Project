import React, { useState, useContext } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Picker, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";
import GeneralNameBar from "../../components/general/generalNameBar";
import BackArrow from "../../../public/backArrow";
import { PatientContext } from "../../../global/patientProvider";

const data = {
  month: [30, 31, 29, 28, 30, 31, 30, 31, 30, 31, 30, 31],
  year: [360, 365, 340],
};

const ArchivePage = () => {
  const { patient } = useContext(PatientContext);
  const [selectedTime, setSelectedTime] = useState("month");
  const [chartData, setChartData] = useState(data.month);
  const [chartLabels, setChartLabels] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const router = useRouter();

  const handleTimeChange = (value) => {
    setSelectedTime(value);
    if (value === "month") {
      setChartData(data.month);
      setChartLabels([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]);
    } else if (value === "year") {
      setChartData(data.year);
      setChartLabels(["Year 1", "Year 2", "Year 3"]);
    }
  };

  return (
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
            Route="Archive"
          />
        </View>
        <View className="bg-[#013a5e] h-[1px] w-3/4 mx-auto my-5" />

        <View className="mx-auto border border-[#87284e] rounded-lg my-5 px-1">
          <Picker
            selectedValue={selectedTime}
            style={{
              height: 50,
              width: 150,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
            }}
            onValueChange={handleTimeChange}
          >
            <Picker.Item label="Monthly" value="month" />
            <Picker.Item label="Yearly" value="year" />
          </Picker>
        </View>

        <View className="my-5 w-3/4 mx-auto">
          <LineChart
            data={{
              labels: chartLabels,
              datasets: [
                {
                  data: chartData,
                  strokeWidth: 3,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                },
              ],
            }}
            width={Dimensions.get("window").width - 310}
            height={400}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#87284e",
              backgroundGradientTo: "#87284e",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#ffffff",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
              },
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "#fff",
              },
              propsForBackgroundLines: {
                strokeWidth: 0.5,
                stroke: "#fff",
              },
            }}
            bezier
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ArchivePage;
