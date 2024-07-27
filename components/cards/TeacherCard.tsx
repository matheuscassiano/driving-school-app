import { UserTypes } from "@/constants/UserTypes";
import { UserType } from "@/enums/user-type.enum";
import classNames from "classnames";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

export interface TeacherCardProps extends TouchableOpacityProps {
  name: string;
  phone: string;
  picture: string;
  type: UserType;
  className?: string;
}

export function TeacherCard({
  name,
  phone,
  picture,
  type,
  className,
  ...props
}: TeacherCardProps) {
  const role = UserTypes[type];
  return (
    <TouchableOpacity
      className={classNames(
        "flex-1 flex-row items-center justify-start space-x-3 rounded-xl p-5 bg-orange-200/30",
        className
      )}
      {...props}
    >
      <Image className="w-10 h-10 rounded-full" source={{ uri: picture }} />
      <View className="flex-1 items-center">
        <Text className="text-base" style={{ fontFamily: "PoppinsMedium" }}>
          {name}
        </Text>
        <Text className="font-poppins">
          {role} - {phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
