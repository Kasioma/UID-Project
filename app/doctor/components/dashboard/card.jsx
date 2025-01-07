import React from "react";
import { View, Image, Text } from "react-native";

const Card = ({ FirstName, LastName, Age, Picture }) => {
  return (
    <View className="flex-1 items-center justify-center bg-[#ffdfdf] rounded-lg m-2 p-3 w-full border-2 border-[#a03a64">
      <Image
        className="mb-2 border-3 border-[#a03a64] rounded-lg"
        source={Picture}
        style={{ width: 100, height: 100 }}
      />
      <View className="flex flex-row items-center justify-center text-[#a03a64] gap-2">
        <Text className="text-sm font-semibold">{FirstName}</Text>
        <Text className="text-sm">{LastName}</Text>
        <Text className="text-sm">{Age} yrs</Text>
      </View>
    </View>
  );
};

export default Card;
