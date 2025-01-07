import React from "react";
import { View, Text } from "react-native";

const NameBar = ({ FirstName, LastName }) => {
  return (
    <View className="flex-row items-center bg-[#87284e] rounded-full px-4 py-3 w-1/2 mx-auto my-5 justify-center gap-3 ">
      <Text className="text-[#fff6f6] text-xl font-bold">{FirstName}</Text>
      <Text className="text-[#fff6f6] text-xl font-bold">{LastName}</Text>
    </View>
  );
};

export default NameBar;
