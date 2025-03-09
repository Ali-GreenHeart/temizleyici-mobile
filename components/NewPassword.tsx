import InputField from "@/components/InputField";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function NewPassword() {
  const [form, setForm] = useState({
    password: "",
  });

  const [secureEntry, setSecureEntry] = useState(true);

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
            Yeni Şifrə Əlavə Et
          </Text>
        </View>
        <Image
          source={images.accessPassword}
          className="w-full h-[300px]"
          resizeMode="contain"
        />
        <Text className="text-xl font-lexend-medium color-gray-800 px-3">
          Yeni Şifrə Yarat
        </Text>
        <InputField
          placeholder="Şifrə"
          icon={icons.lock}
          secureTextEntry={secureEntry}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <InputField
          placeholder="Şifrə"
          icon={icons.lock}
          secureTextEntry={secureEntry}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
        <TouchableOpacity className="bg-primary shadow-md shadow-zinc-500 rounded-full py-5 mt-10">
          <Text className="color-white font-lexend-bold self-center">
            Davam et
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
