import React from "react";
import { View, Text } from "react-native";

const GeneralNameBar = ({ FirstName, LastName, Route }) => {
  return (
    <View className="flex-row items-center bg-[#87284e] rounded-full px-4 py-3 w-1/2 mx-auto my-5 justify-center gap-3 ">
      <View className="flex flex-row justify-center items-center gap-3 w-3/4">
        <Text className="text-[#fff6f6] text-xl font-bold">{FirstName}</Text>
        <Text className="text-[#fff6f6] text-xl font-bold">{LastName}</Text>
      </View>
      <View className="absolute left-[60%] h-full w-[1px] bg-[#fff6f6]" />
      <Text className="text-[#fff6f6] text-xl font-bold w-1/4">{Route}</Text>
    </View>
  );
};

export default GeneralNameBar;
