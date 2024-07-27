import { Button } from "@/components/Button";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { FormField } from "@/components/FormField";
import { Link, useNavigation } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        <View className="flex-1 border justify-center gap-y-3 p-8">
          <Text
            className="text-2xl text-zinc-700"
            style={{ fontFamily: "PoppinsMedium" }}
          >
            Realizar cadastro
          </Text>
          <View className="gap-y-3">
            <FormField.Root>
              <FormField.Icon name="user" />
              <FormField.TextInput placeholder="Digite seu nome" />
            </FormField.Root>
            <View />
            <FormField.Root>
              <FormField.Icon name="mail" />
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
            <View />
            <FormField.Root>
              <FormField.Icon name="paperclip" />
              <FormField.TextInput
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                secureTextEntry={false}
              />
            </FormField.Root>
          </View>
          <Button.Root onPress={handleLogin}>
            <Button.Label>Entrar</Button.Label>
          </Button.Root>
        </View>
      </DismissKeyboardView>
    </ImageBackground>
  );
}
