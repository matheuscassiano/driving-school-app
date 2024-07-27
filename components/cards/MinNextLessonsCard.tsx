import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import classNames from "classnames";
import { Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export interface MinNextLessonsCardProps extends TouchableOpacityProps {
  className?: string;
  vehicle: string;
  teacher: string;
}

export function MinNextLessonsCard({
  className,
  vehicle,
  teacher,
  ...props
}: MinNextLessonsCardProps) {
  const icon = vehicle === "car" ? "car-side" : "motorbike";

  return (
    <TouchableOpacity
      className={classNames(
        "flex-1 h-20 items-center justify-center gap-0 rounded-xl p-2 bg-orange-200/30",
        className
      )}
      {...props}
    >
      <MaterialCommunityIcons name={icon} size={30} color="#3f3f46" />
      <View className="flex-row items-center gap-x-2">
        <Feather name="user" size={14} color="#3f3f46" />
        <Text className="font-poppins">{teacher}</Text>
      </View>
      <View className="flex-row items-center gap-x-2">
        <Feather name="calendar" size={14} color="#3f3f46" />
        <Text style={{ fontFamily: "PoppinsMedium" }}>17 de Set. 2024</Text>
      </View>
      {/* <View className="flex-row items-center justify-between">
        <View className="justify-end">
          <View className="flex-row items-center gap-x-2">
            <Feather name="user" size={14} color="#3f3f46" />
            <Text className="font-poppins">João</Text>
          </View>
          <View className="flex-row items-center gap-x-2">
            <Feather name="clock" size={14} color="#3f3f46" />
            <Text className="font-poppins">08:00</Text>
          </View>
        </View>
        <View className="flex-1 items-end justify-end">
          <MaterialCommunityIcons name={icon} size={35} color="#3f3f46" />
        </View>
      </View> */}

      {/* <View className="gap-0">
        <Text className="text-3xl font-medium">
          00
        </Text>
        <Text className="text-lg" style={{ fontFamily: "PoppinsMedium" }}>
          Aulas
        </Text>
      </View>
      <MaterialCommunityIcons name="car-side" size={40} color="#3f3f46" /> */}
    </TouchableOpacity>
  );
}
