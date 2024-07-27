import { Feather } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";

export function Icon({
  size = 24,
  color = "#3f3f46",
  ...props
}: IconProps<ComponentProps<typeof Feather>["name"]>) {
  return <Feather size={size} color={color} {...props} />;
}
