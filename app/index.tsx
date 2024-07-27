import { Button } from "@/components/Button";
import { Link, useNavigation } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const background = require("../assets/images/background/app.png");
  const navigation = useNavigation();

  const handleRegister = () => navigation.navigate("register");

  const handleLogin = () => navigation.navigate("login");

  return (
    <ImageBackground source={background} className="flex-1" resizeMode="cover">
      <View className="flex-1 justify-end p-8">
        <Text
          className="text-white text-4xl pr-30"
          style={{ fontFamily: "PoppinsMedium" }}
        >
          Dirija em um mundo sem complexidades
        </Text>
        <View className="w-full items-center py-6 gap-y-5">
          <Button.Root onPress={handleRegister}>
            <Button.Label>Cadastro</Button.Label>
          </Button.Root>
          <TouchableOpacity onPress={handleLogin}>
            <Text className="font-poppins text-white">
              Entrar na minha conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
