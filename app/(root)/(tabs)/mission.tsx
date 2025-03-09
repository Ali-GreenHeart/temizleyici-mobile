import { Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import Cards from "@/components/Cards";

export default function Mission() {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Cards />}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image source={images.icon} className="size-8" />
                <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
                  Təmİzləyici
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.bell} className="size-6" />
              </TouchableOpacity>
            </View>
            <Text className="text-3xl font-lexend-bold color-gray-800 my-5">
              Hər vaxtın xeyir, Əli! 👋
            </Text>
            <Search />
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
