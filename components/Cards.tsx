import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";

interface Props {
  onPress?: () => void;
}
export default function Cards({ onPress }: Props) {
  return (
    <>
      <TouchableOpacity
        onPress={() => router.push}
      >
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <Image
            source={images.sea}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <View className="flex-1 ml-4">
            <Text className="font-lexend-bold text-lg text-gray-800">
              Təmiz dəniz!
            </Text>
            <Text className="font-lexend-medium text-sm text-gray-500">
              12 Dekabr 2024-cu il, saat 12:30
            </Text>
            <View className="flex-row items-center mt-1">
              <Image source={icons.location} className="size-4" />
              <Text className="font-lexend-medium text-gray-800 text-sm ml-1">
                Lənkəran ş.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image source={icons.bookmark} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 border border-gray-100">
          <Image
            source={images.baku}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <View className="flex-1 ml-4">
            <Text className="font-lexend-bold text-lg text-gray-800">
              Gözəl Bakı!
            </Text>
            <Text className="font-lexend-medium text-sm text-gray-500">
              19 Yanvar 2025-ci il, saat 14:00
            </Text>
            <View className="flex-row items-center mt-1">
              <Image source={icons.location} className="size-4" />
              <Text className="font-lexend-medium text-gray-800 text-sm ml-1">
                Bakı ş.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image source={icons.bookmark} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
}
