import { TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export interface ButtonProps extends TouchableOpacityProps {}

export function Root({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-full items-center bg-amber-500 p-4 rounded-lg text-red"
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
