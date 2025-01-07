import React from "react";
import { View, TextInput } from "react-native";
import Search from "../../../public/search";

const SearchBar = ({ onSearch }) => {
  return (
    <View className="flex-row items-center bg-[#87284e] rounded-full px-4 py-3 w-1/2 mx-auto my-5">
      <Search className={`mr-2 text-[#fff6f6] text-xl`} />
      <View className="absolute left-12 h-full w-[1px] bg-[#fff6f6]" />
      <TextInput
        className="flex-1 text-[#fff6f6] ml-4 text-xl"
        placeholder="Search Patient"
        placeholderTextColor="#fff6f6"
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchBar;
