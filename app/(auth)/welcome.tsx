import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <StatusBar style="dark" />
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-in");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-lexend-bold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[16px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#66AD60] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-lexend-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Gəlin başlayaq" : "Növbəti"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-in")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-96 mx-auto mt-10"
      />
    </SafeAreaView>
  );
}
