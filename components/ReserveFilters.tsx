import { reserves } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, } from "react-native";

export default function ReserveFilters() {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(
        params.filter || "Tamamlanmış"
    );

    const handleCategoryPress = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory("Tamamlanmış");
            router.setParams({ filters: "Tamamlanmış" })
            return;
        }
        setSelectedCategory(category);
        router.setParams({ filters: category });
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3 mb-2"
        >
            {reserves.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleCategoryPress(item.category)} className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === item.category ? "bg-primary" : "bg-white border border-third"}`}>
                    <Text className={`font-lexend-semibold ${selectedCategory === item.category ? "text-white" : "text-third"}`}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

    );
}
