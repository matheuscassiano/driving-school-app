import { View, ViewProps } from "react-native";

export function Root({ children }: ViewProps) {
  return <View className="flex-row space-x-3 border border-zinc-200 rounded-lg py-3 px-4">{children}</View>;
}
