import Filters from "@/components/Filters";
import MissionCards from "@/components/MissionCards";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mission() {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <MissionCards />}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center mt-5">
              <TouchableOpacity
                onPress={() => router.canGoBack()}
              >
                <Image source={icons.backArrow} className="size-8" />
              </TouchableOpacity>
              <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
                Missiyalar
              </Text>
            </View>
            <Image
              source={images.mission}
              className="w-full h-[200px]"
              resizeMode="cover"
            />

            <View className="flex flex-row items-center justify-between border-t pt-5 border-gray-300">
              <Text className="text-2xl font-lexend-bold color-gray-800">
                Günlük missiyalar
              </Text>
              <TouchableOpacity>
                <Text className="text-2xl font-lexend-bold color-primary">
                  Hamısı
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
