import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const checkSize = () => {
    const { width, height } = Dimensions.get("window");
    const aspectRatio = width / height;
    return aspectRatio <= 1.6 && Math.min(width, height) >= 768;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const size = checkSize();
    setIsTablet(size);
  }, [isMounted]);

  useEffect(() => {
    if (isMounted && isTablet != null) {
      if (isTablet) {
        router.replace("/doctor");
      } else {
        router.replace("/patient");
      }
    }
  }, [isMounted, isTablet]);

  return null;
};

export default App;
