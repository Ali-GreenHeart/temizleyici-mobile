import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import ReserveFilters from "@/components/ReserveFilters";
import ReserveCards from "@/components/ReserveCards";

export default function Reserve() {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <ReserveCards />}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5 my-5">
            <View className="flex flex-row items-center justify-between mt-5 mb-5">
              <View className="flex flex-row items-center">
                <Image source={images.icon} className="size-8" />
                <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
                  Şikayətlərim
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.search} className="size-6" />
              </TouchableOpacity>
            </View>
            <ReserveFilters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
