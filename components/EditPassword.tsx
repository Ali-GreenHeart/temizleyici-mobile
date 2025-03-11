import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditPassword() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-5 my-5">
        <View className="flex flex-row items-center mt-5">
          <TouchableOpacity
            onPress={() => router.replace("/(root)/(tabs)/profile")}
          >
            <Image source={icons.backArrow} className="size-8" />
          </TouchableOpacity>
          <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
            Şifrəni Yenilə
          </Text>
        </View>
        <Image
          source={images.password}
          className="w-full h-[300px]"
          resizeMode="contain"
        />
        <Text className="text-xl font-lexend-medium color-gray-800 px-3">
          Parolunuzu sıfırlamaq üçün qeyd etdiyiniz email ünvanına kod
          göndəriləcək
        </Text>

        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <View className="w-12 h-12  rounded-full flex items-center justify-center m-4">
            <Image source={icons.mailIcon} className="size-14" />
          </View>
          <View>
            <Text className="text-gray-500 text-sm font-lexend-medium">
              Email vasitəsi ilə
            </Text>
            <Text className="text-black font-lexend-bold text-lg">
              ali***ev@yourdomain.com
            </Text>
          </View>
        </View>

        <TouchableOpacity className="bg-primary shadow-md shadow-zinc-500 rounded-full py-5 mt-10">
          <Text className="color-white font-lexend-bold self-center">
            Davam et
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
