import { VehicleStatus } from "@/enums/vehicle-status.enum";
import { VehicleType } from "@/enums/vehicle-type.enum";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

export interface CarCardProps extends TouchableOpacityProps {
  model: string;
  brand: string;
  color: string;
  plate: string;
  picture?: string;
  type: VehicleType;
  status: VehicleStatus;
}

export function CarCard({
  model,
  brand,
  color,
  plate,
  picture,
  status,
  type,
  ...props
}: CarCardProps) {
  const isAvailable = status === VehicleStatus.AVAILABLE;
  const hasVehiclePicture = !!picture;

  const vehicleTypeIcon = {
    [VehicleType.CAR]: "car-side",
    [VehicleType.MOTORCYCLE]: "motorbike",
  };

  const icon = vehicleTypeIcon[type];

  return (
    <TouchableOpacity
      className="flex-row items-center space-x-5 w-full py-3 px-5 rounded-xl bg-orange-200/30"
      {...props}
    >
      {hasVehiclePicture ? (
        <Image
          src={picture}
          className="h-12 w-16"
          resizeMode="contain"
        />
      ) : (
        <MaterialCommunityIcons name={icon} size={30} color="#3f3f46" />
      )}
      <View className="mr-auto">
        <Text
          className="text-base text-zinc-700"
          style={{ fontFamily: "PoppinsMedium" }}
        >
          {model}
        </Text>
        <Text className="font-poppins text-zinc-700">
          {brand} - {color} - {plate}
        </Text>
      </View>
      {isAvailable ? (
        <Feather name="check-circle" size={22} color="green" />
      ) : (
        <Feather name="x-circle" size={22} color="red" />
      )}
    </TouchableOpacity>
  );
}
