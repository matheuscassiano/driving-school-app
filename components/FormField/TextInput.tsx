import { TextInput as NativeInput, TextInputProps } from "react-native";

export function TextInput({
  placeholderTextColor = "#3f3f46",
  ...props
}: TextInputProps) {
  return (
    <NativeInput
      className="flex-1 text-zinc-700"
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
}
