import { Text, TextProps } from "react-native";

export interface ButtonProps extends TextProps {}

export function Label({ children, ...props }: ButtonProps) {
  return (
    <Text
      className="text-white text-base"
      style={{ fontFamily: "PoppinsMedium" }}
      {...props}
    >
      {children}
    </Text>
  );
}
