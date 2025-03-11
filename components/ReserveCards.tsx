import images from "@/constants/images";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ReserveCards() {
    return (
        <View className="bg-white rounded-2xl p-4 my-5 mx-5 shadow-md">
            <View className="flex flex-row justify-between items-center p-3 mb-2">
                <Text className="text-gray-900 text-sm font-lexend-medium">
                    22 dekabr 2024-cü il - 10:00
                </Text>
                <TouchableOpacity className="bg-green-500 px-3 py-1 rounded-lg">
                    <Text className="text-white text-sm font-lexend-semibold">Toplanıldı</Text>
                </TouchableOpacity>
            </View>


            <View className="flex flex-row items-center gap-3 border-t pt-5 border-gray-300">
                <Image
                    // source={images.garbage}
                    className="w-16 h-16 rounded-lg"
                />
                <View className="flex-1">
                    <Text className="text-lg font-lexend-bold text-gray-800">
                        Bina yaxınlığında...
                    </Text>
                    <Text className="text-gray-500 text-sm font-lexend-medium">Məkan: Bakıxanov</Text>
                    <Text className="text-gray-900 text-sm font-lexend-medium">Qazanılan Bal: 12 XP</Text>
                </View>
            </View>
        </View>
    );
}
