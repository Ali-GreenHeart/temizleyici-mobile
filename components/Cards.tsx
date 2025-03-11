import icons from "@/constants/icons";
import { IEvent } from "@/interfaces";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  card: IEvent;
}



export default function Card({ card }: Props) {
  const page = "/events/" + card._id
  return (
    <>
      <TouchableOpacity onPress={() => router.push(page as any)}>
        <View className="bg-white rounded-2xl shadow-md flex-row items-center p-4 my-5 border border-gray-100">
          <Image
            src={card.photo!}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <View className="flex-1 ml-4">
            <Text className="font-lexend-bold text-lg text-gray-800">
              {card.name}
            </Text>
            <Text className="font-lexend-medium text-sm text-gray-500">
              {card.date}
            </Text>
            <View className="flex-row items-center mt-1">
              <Image source={icons.location} className="size-4" />
              <Text className="font-lexend-medium text-gray-800 text-sm ml-1">
                {card.type}
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image source={icons.bookmark} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
}
