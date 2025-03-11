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

export default function EventsPage() {
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
        <SafeAreaView className="bg-white h-full p-2">
            <StatusBar style="dark" />
            <FlatList
                data={cards}
                renderItem={({ item }) => <Cards card={item} />}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View className="flex flex-row items-center mt-5">
                        <TouchableOpacity
                            onPress={() => router.replace("/(root)/(tabs)/home")}
                        >
                            <Image source={icons.backArrow} className="size-8" />
                        </TouchableOpacity>
                        <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
                            Bütün tədbirlər
                        </Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}
