import { Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import icons from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import Cards from "@/components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { BE_URL } from "@/constants/api";
import { useToken } from "@/context/AuthProvider";
import { router } from "expo-router";
import { IEvent } from "@/interfaces";

export default function Home() {
  const [cards, setCards] = useState<IEvent[]>([])
  const token = useToken();
  useEffect(() => {
    console.log(token)
    axios.get(BE_URL + "user/events", {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => {
      setCards(res.data)
    }).catch((er) => {
      console.log(er)
    })
  }, [])
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="dark" />
      <FlatList
        data={cards}
        renderItem={({ item }) => <Cards card={item} />}
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
              <TouchableOpacity onPress={() => router.replace("/notifications")}>
                <Image source={icons.bell} className="size-6" />
              </TouchableOpacity>
            </View>
            <Text className="text-xl font-lexend-bold color-gray-800 my-5">
              Hər vaxtın xeyir, Əli! 👋
            </Text>
            <Search />
            <Image
              source={images.bonus}
              className="w-full h-[200px]"
              resizeMode="cover"
            />

            <View className="flex flex-row items-center justify-between border-t pt-5 border-gray-300">
              <Text className="text-2xl font-lexend-bold color-gray-800">
                Tədbirlər
              </Text>
              <TouchableOpacity onPress={() => router.push('/allevents')}>
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
