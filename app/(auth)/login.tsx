import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import icons from "@/constants/icons";
import { useAuthSession } from "@/context/AuthProvider";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useToast } from "expo-toast";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuthSession()
  const toast = useToast()

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    if (form.email === "" || form.password === "") {
      toast.show("Bütün xanaları doldurun!")
      return
    }
    signIn(form)
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <ScrollView className="">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-in");
          }}
          className="w-full flex justify-start items-start p-4"
        >
          <Image source={icons.backArrow} className="w-8 h-8 color-gray" />
        </TouchableOpacity>
        <Text className="text-5xl font-lexend-bold color-gray flex justify-start items-start p-4 my-5">
          Daxil olun
        </Text>
        <View className="p-5">
          <InputField
            placeholder="Email"
            icon={icons.message}
            textContentType="emailAddress"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            placeholder="Şifrə"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-primary shadow-md shadow-zinc-500 rounded-full py-5 m-5 mb-10"
        >
          <Text className="color-white font-lexend-bold self-center">
            Daxil olun
          </Text>
        </TouchableOpacity>
        <OAuth />
        <TouchableOpacity
          // onPress={handleLogin}
          onPress={() => {
            router.push('/mission')
          }}
          className="bg-white shadow-md shadow-zinc-500 rounded-xl py-5 m-5 my-10"
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
        <Link href="/(auth)/sign-up" className="text-lg text-center mt-5">
          <Text className="font-lexend color-gray-500">
            Hesabınız yoxdur??{" "}
          </Text>
          <Text className="font-lexend-semibold color-blue">Hesab yaradın</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
