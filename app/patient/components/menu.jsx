import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Hamburger from "../../public/hamburger";

const Menu = ({ FirstName }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <View className="flex flex-col">
      <View className="flex flex-row justify-between items-center bg-[#87284e] p-4">
        <TouchableOpacity onPress={handleOpen}>
          <Hamburger className="text-[#fff6f6] text-3xl" />
        </TouchableOpacity>
        <Text className="text-[#fff6f6] text-2xl">Welcome {FirstName}!</Text>
        <TouchableOpacity className="bg-[#fff6f6] rounded-lg px-3 py-2">
          <Text className="text-[#87284e] text-xl">HELP</Text>
        </TouchableOpacity>
      </View>

      {open && (
        <View className="bg-[#87284e] py-2 px-4 shadow-lg rounded-b-lg">
          <TouchableOpacity
            className="py-2  w-fit mx-auto"
            onPress={() => router.push("/")}
          >
            <Text className="text-[#fff6f6] text-lg">Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 w-fit mx-auto"
            onPress={() => router.push("/patient/routes/plan")}
          >
            <Text className="text-[#fff6f6] text-lg">Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 w-fit mx-auto"
            onPress={() => router.push("/patient/routes/consultation")}
          >
            <Text className="text-[#fff6f6] text-lg">Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 w-fit mx-auto"
            onPress={() => router.push("/patient/routes/favourPoints")}
          >
            <Text className="text-[#fff6f6] text-lg">Favour Points</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 w-fit mx-auto"
            onPress={() => router.push("/patient/routes/exercises")}
          >
            <Text className="text-[#fff6f6] text-lg">Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-2 w-fit mx-auto"
            onPress={() => router.push("/patient/routes/contact")}
          >
            <Text className="text-[#fff6f6] text-lg">Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Menu;
