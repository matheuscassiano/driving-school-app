import { Button } from "@/components/Button";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { FormField } from "@/components/FormField";
import { Link, useNavigation } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const background = require("../assets/images/background/auth.png");

  function handleLogin() {
    navigation.navigate("(tabs)", { screen: "Home" });
  }

  return (
    <ImageBackground
      source={background}
      className="flex-1 bg-white"
      resizeMode="cover"
    >
      <DismissKeyboardView className="flex-1">
        <View className="flex-1 items-center justify-center p-8">
          <View className="w-full gap-y-3">
            <Text
              className="text-2xl text-zinc-700"
              style={{ fontFamily: "PoppinsMedium" }}
            >
              Realizar login
            </Text>
            <View className="gap-y-3">
              <FormField.Root>
                <FormField.Icon name="user" />
                <FormField.TextInput
                  placeholder="Digite seu email"
                  keyboardType="email-address"
                />
              </FormField.Root>
              <View />
              <FormField.Root>
                <FormField.Icon name="lock" />
                <FormField.TextInput
                  placeholder="Digite sua senha"
                  secureTextEntry
                />
              </FormField.Root>
            </View>
            <Button.Root onPress={handleLogin}>
              <Button.Label>Entrar</Button.Label>
            </Button.Root>
            <TouchableOpacity className="flex-row gap-0">
              <Text className="font-poppins text-orange-500">Recuperar</Text>
              <Text className="font-poppins text-zinc-700"> minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboardView>
    </ImageBackground>
  );
}
