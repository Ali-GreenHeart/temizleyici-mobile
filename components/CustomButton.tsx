import { Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "@/types/types";

const getBgVariantStyle =(variant:ButtonProps['bgVariant']) =>{
    switch(variant) {
        case "secondary":
            return "bg-orange"; 
            case "blue":
            return "bg-blue"; 
            default:
                return "bg-[#A1D6B5]"
    }
}

const getTextVariantStyle =(variant:ButtonProps['textVariant']) =>{
    switch(variant) {
        case "primary":
            return "default"; 
            case "secondary":
            return "text-orange"; 
            default:
                return "bg-[#A1D6B5]"
    }
}
export default function CustomButton({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}:ButtonProps) {
  return <TouchableOpacity onPress={onPress} className={`w-full p-3 mb-6 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`} {...props}>
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-lexend-bold color-white ${getTextVariantStyle(textVariant)}`}>{title}</Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>;
}
