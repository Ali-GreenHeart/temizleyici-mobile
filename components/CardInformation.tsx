import Cards from "@/components/Cards";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CardInformation() {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2,]}
        renderItem={({ item }) => <Cards />}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5 my-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <TouchableOpacity
                  onPress={() => router.replace("/(root)/(tabs)/home")}
                >
                  <Image source={icons.backArrow} className="size-8" />
                </TouchableOpacity>
                <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
                  Təmiz dəniz!
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={icons.bookmark} className="size-6" />
              </TouchableOpacity>
            </View>
            <Image
              source={images.sea1}
              className="w-full h-[200px] mt-5"
              resizeMode="contain"
            />

            <View className="border-t pt-5 border-gray-300">
              <Text className="text-2xl font-lexend-bold color-gray-800 text-start">
                Tədbir haqqında
              </Text>
              <Text className="font-lexend-medium text-lg mt-2">
                🌊 Dəniz bizimdir, onu qorumaq da bizim borcumuzdur! 🌿 Gəl,
                sahillərimizi birlikdə təmizləyək, təbiətə yaxşılıq edək.
                Dənizimizi plastik və tullantılardan azad edək, gələcəyə daha
                təmiz bir dünya bəxş edək. Bu gözəl təşəbbüsə sən də qoşul,
                mavini qoru! 💙✨
              </Text>
              <Text className="font-lexend-medium text-sm text-gray-500 mt-3">
                12 Dekabr 2024-cu il, saat 12:30
              </Text>
              <Text className="font-lexend-medium text-sm text-gray-500 mt-3">
                19 person joined
              </Text>
              <View className="flex-row items-center mt-3">
                <Image source={icons.location} className="size-4" />
                <Text className="font-lexend-medium text-gray-800 text-sm ml-1">
                  Lənkəran ş.
                </Text>
              </View>
              <TouchableOpacity className="bg-primary shadow-md shadow-zinc-500 rounded-full py-5 mt-5">
                <Text className="color-white font-lexend-bold self-center">
                  Qoşul
                </Text>
              </TouchableOpacity>
              <Text className="text-2xl font-lexend-bold color-gray-800 text-start mt-5">
                Digər tədbirlər
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
