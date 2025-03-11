import OAuth from "@/components/OAuth";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SignIn() {
  const handleLogin = () => {
    router.replace("/(auth)/login");
  };

  return (
    <ScrollView>
      <SafeAreaView className="bg-white pb-10">
        <StatusBar style="dark" />
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/welcome");
          }}
          className="w-full flex justify-start items-start p-5"
        >
          <Image source={icons.backArrow} className="w-8 h-8 color-gray" />
        </TouchableOpacity>
        <Image source={images.login} className="w-full" resizeMode="contain" />
        <Text className=" text-center font-lexend-bold text-4xl color-gray">
          Giriş etməyin{"\n"}
          <Text>vaxtı gəldi!</Text>
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-white shadow-md shadow-zinc-500 rounded-xl py-5 m-5"
        >
          <View className="flex flex-row items-center justify-center">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="ml-2 font-lexend-semibold color-gray-600">
              Google ilə davam et
            </Text>
          </View>
        </TouchableOpacity>
        <OAuth />
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-primary shadow-md shadow-zinc-500 rounded-full py-5 m-4"
        >
          <Text className="color-white font-lexend-bold self-center">
            İstifadəçi kimi davam et
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          className="bg-secondary shadow-md shadow-zinc-500 rounded-full py-5 m-4"
        >
          <Text className="color-white font-lexend-bold self-center">
            İcraçı kimi qeydiyyatdan keç
          </Text>
        </TouchableOpacity>
        <Link href="/(auth)/sign-up" className="text-lg text-center mt-2">
          <Text className="font-lexend color-gray-500">Hesabınız yoxdur? </Text>
          <Text className="font-lexend-semibold color-blue">
            Qeydiyyatdan keç
          </Text>
        </Link>
      </SafeAreaView>
    </ScrollView>
  );
}
