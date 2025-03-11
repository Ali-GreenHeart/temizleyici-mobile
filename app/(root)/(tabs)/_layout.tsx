import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-2 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#66AD60" : "#9E9E9E"}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${focused
        ? "text-primary font-lexend-medium"
        : "text-gray-400 font-lexend"
        }text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#66AD60",
          borderTopWidth: 1,
          minHeight: 70,
          paddingVertical: 10
        },
        tabBarLabelStyle: {
          fontSize: 10
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Əsas",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Əsas" />
          ),
        }}
      />

      <Tabs.Screen
        name="reserve"
        options={{
          title: "Şikayətlər",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.document}
              focused={focused}
              title="Şikayətlər"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Kamera",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.camera} focused={focused} title="Kamera" />
          ),
        }}
      />
      <Tabs.Screen
        name="mission"
        options={{
          title: "Missiyalar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.chat} focused={focused} title="Missiyalar" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Hesab",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} focused={focused} title="Hesab" />
          ),
        }}
      />
    </Tabs>
  );
}
