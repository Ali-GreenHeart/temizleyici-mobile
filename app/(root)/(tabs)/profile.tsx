import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAuthSession } from "@/context/AuthProvider";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text
        className={`text-lg font-lexend-semibold text-gray-800 ${textStyle}`}
      >
        {title}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);
export default function Profile() {
  const { signOut } = useAuthSession()

  const handleLogout = async () => {
    signOut()
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.icon} className="size-7" />
            <Text className="text-2xl font-lexend-bold color-gray-800 px-3">
              Profil
            </Text>
          </View>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className=" flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-16 right-9">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-lexend-bold mt-2 color-gray-800">
              Əli Əliyev
            </Text>
            <Text className="font-lexend-semibold mt-2 color-gray-800">
              eli.eliyev@gmail.com
            </Text>
          </View>
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-gray-300">
          {settings.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className="flex flex-col mt-5">
          <SettingsItem
            icon={icons.logout}
            title="Çıxış"
            textStyle="text-third"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
