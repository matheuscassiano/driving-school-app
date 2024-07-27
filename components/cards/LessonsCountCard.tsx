import { MaterialCommunityIcons } from "@expo/vector-icons";
import classNames from "classnames";
import { Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export interface LessonsCountCardProps extends TouchableOpacityProps {
  className?: string;
  lessons: number;
}

export function LessonsCountCard({
  className,
  lessons,
  ...props
}: LessonsCountCardProps) {
  const hasOneLesson = lessons === 1;
  return (
    <TouchableOpacity
      className={classNames(
        "flex-row items-center justify-between w-full py-4 px-5 rounded-xl bg-orange-200/50",
        className
      )}
      {...props}
    >
      <View>
        <Text className="text-3xl font-medium">
          {("00" + lessons).slice(-2)}
        </Text>
        <Text className="text-lg" style={{ fontFamily: "PoppinsMedium" }}>
          {hasOneLesson ? "Aula" : "Aulas"}
        </Text>
      </View>
      <MaterialCommunityIcons name="car-side" size={40} color="#3f3f46" />
    </TouchableOpacity>
  );
}
