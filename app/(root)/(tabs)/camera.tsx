import icons from "@/constants/icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Notification() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-5 my-5">
        <View className="flex flex-row items-center mt-5">
          <TouchableOpacity
            onPress={() => router.replace("/(root)/(tabs)/home")}
          >
            <Image source={icons.backArrow} className="size-8" />
          </TouchableOpacity>
          <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
            Bildirişlər
          </Text>
        </View>

        <Text className="text-xl font-lexend-medium color-gray-800 px-3 mt-5">
          Bu gün
        </Text>

        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <View className="w-12 h-12  rounded-full flex items-center justify-center m-4">
            <Image source={icons.rubbishIcon} className="size-14" />
          </View>
          <View>
            <Text className="text-black font-lexend-bold text-lg">
              Təmizkar Əli!
            </Text>
            <Text className="text-gray-500 text-sm font-lexend-mediumn">
              İlk şikayətiniz uğurla başa çatdı. Tullantı aradan qaldırıldı.
              (+50 xal)
            </Text>
          </View>
        </View>

        <Text className="text-xl font-lexend-medium color-gray-800 px-3">
          Dünən
        </Text>
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <View className="w-12 h-12  rounded-full flex items-center justify-center m-4">
            <Image source={icons.reserveIcon} className="size-14" />
          </View>
          <View>
            <Text className="text-black font-lexend-bold text-lg">
              İlk sifarişiniz göndərdiniz!
            </Text>
            <Text className="text-gray-500 text-sm font-lexend-mediumn">
              İlk tullantı şikayətiniz qeydə alındı.
            </Text>
          </View>
        </View>

        <Text className="text-xl font-lexend-medium color-gray-800 px-3">
          11 dekabr 2024
        </Text>
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <View className="w-12 h-12  rounded-full flex items-center justify-center m-4">
            <Image source={icons.walletIcon} className="size-14" />
          </View>
          <View>
            <Text className="text-black font-lexend-bold text-lg">
              Kredit kartınız qoşuldu!
            </Text>
            <Text className="text-gray-500 text-sm font-lexend-mediumn">
              Kredit kartınız uğurla qoşuldu.
            </Text>
          </View>
        </View>
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <View className="w-12 h-12  rounded-full flex items-center justify-center m-4">
            <Image source={icons.profilIcon} className="size-14" />
          </View>
          <View>
            <Text className="text-black font-lexend-bold text-lg">
              Uğurla Qeydiyyatdan Keçdiniz!
            </Text>
            <Text className="text-gray-500 text-sm font-lexend-mediumn">
              Hesabınız yaradıldı.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
