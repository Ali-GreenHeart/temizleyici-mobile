import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";

interface Props {
    onPress?: () => void;
}
export default function MissionCards({ onPress }: Props) {
    return (
        <>
            <TouchableOpacity onPress={() => router.push}>
                <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 mx-5 border border-gray-100">
                    <Image

                        // source={images.trash}

                        className="w-20 h-20"
                        resizeMode="contain"
                    />
                    <View className="flex-1 ml-4">
                        <Text className="font-lexend-bold text-lg text-gray-800">
                            5 tullantı / 20 XP
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Image
                        // source={icons.gift}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 mx-5 border border-gray-100">
                    <Image

                        // source={images.waste}

                        className="w-20 h-20"
                        resizeMode="contain"
                    />
                    <View className="flex-1 ml-4">
                        <Text className="font-lexend-bold text-lg text-gray-800">
                            10 tullantı / 50 XP
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Image
                        // source={icons.gift}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </>
    );
}
