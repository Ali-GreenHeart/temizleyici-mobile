import { router } from "expo-router";
import icons from "./icons";

export const settings = [
  {
    title: "Profildə Düzəliş Et",
    icon: icons.person,
  },
  {
    title: "Şifrəni yenilə",
    icon: icons.lock,
    onPress: () => {
      router.push('/(auth)/editpassword')
    }
  },

  {
    title: "Nailiyyətlər",
    icon: icons.success,
  },

  {
    title: "Dil",
    icon: icons.language,
  },
];

export const categories = [
  { title: "Hamısı", category: "Hamısı" },
  { title: "Ölkə-daxili", category: "Ölkə-daxili" },
  { title: "Şəhər-daxili", category: "Şəhər-daxili" },
];

export const reserves = [
  { title: "Tamamlanmış", category: "Tamamlanmış" },
  { title: "Ləğv edilmiş", category: "Ləğv edilmiş" },
]
