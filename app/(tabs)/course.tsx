import { ProgressBar } from "@/components/ProgressBar";
import { DrivingClassStatus } from "@/enums/driving-class-status.enum";
import { VehicleType } from "@/enums/vehicle-type.enum";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CouseScreen() {
  const [course, setCourse] = useState<any>();
  const [leasons, setLeasons] = useState<any>();
  const [completedLeasons, setCompletedLeasons] = useState<any>();
  const navigation = useNavigation();

  const startDateString = new Date(course?.startDate).toLocaleDateString();
  const endDateString = new Date(course?.endDate).toLocaleDateString();

  const percentage = (completedLeasons?.length || 0) / (leasons?.length || 0);

  const leasonTypeIcon = {
    [VehicleType.CAR]: "car-side",
    [VehicleType.MOTORCYCLE]: "motorbike",
  };

  const leasonStatusIcon = {
    [DrivingClassStatus.PENDING]: "clock",
    [DrivingClassStatus.CANCELLED]: "x-circle",
    [DrivingClassStatus.FINISHED]: "check-circle",
    [DrivingClassStatus.IN_PROGRESS]: "play-circle",
  };

  function getCourse() {
    axios
      .get("http://192.168.0.30:6661/courses")
      .then((response) => {
        navigation.setOptions({ title: response.data[0].name });
        setCourse(response.data[0]);
        getLeasons(response.data[0].id);
      })
      .catch((error) => console.error(error));
  }

  function getLeasons(courseId: number) {
    axios
      .get(`http://192.168.0.30:6661/courses/${courseId}/leasons`)
      .then((response) => {
        setLeasons(response.data);
        setCompletedLeasons(
          response.data.filter(
            (leason: any) => leason.status === DrivingClassStatus.FINISHED
          )
        );
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <ScrollView className="gap-y-3 px-5 bg-white">
      <View>
        <Text className="text-base text-justify text-zinc-700 font-poppins">
          {course?.description}
        </Text>
        <Text className="mt-1.5 font-poppins text-zinc-700">
          {startDateString} - {endDateString}
        </Text>
      </View>
      <View className="gap-y-1.5">
        <Text
          className="text-2xl text-zinc-700"
          style={{ fontFamily: "PoppinsMedium" }}
        >
          Aulas
        </Text>
        <Text className="font-poppins text-zinc-700">
          {completedLeasons?.length || 0}/{leasons?.length || 0} aulas
          concluídas
        </Text>
        <ProgressBar className="h-1.5" progress={percentage} />
      </View>
      <View className="gap-y-3">
        {/* <View className="flex-row gap-x-3">
          <Text className="text-lg text-zinc-700 font-poppins">Realizadas</Text>
          <Text className="text-lg text-zinc-700 font-poppins">|</Text>
          <Text className="text-lg text-zinc-700 font-poppins">Futuras</Text>
        </View> */}
        {leasons?.map((leason: any) => {
          const leasonDateString = new Date(leason.date).toLocaleDateString();
          const hasVehiclePicture = leason?.vehicle?.picture;
          const icon = leasonTypeIcon[leason?.vehicle?.type]
            ? leasonTypeIcon[leason?.vehicle?.type]
            : "book";
          return (
            <TouchableOpacity className="flex-row items-center w-full py-3 px-5 space-x-5 rounded-xl bg-orange-200/30">
              {hasVehiclePicture ? (
                <Image
                  src={leason.vehicle.picture}
                  className="h-12 w-16"
                  resizeMode="contain"
                />
              ) : (
                <MaterialCommunityIcons name={icon} size={30} color="#3f3f46" />
              )}
              <View className="flex-1">
                <View className="flex-row space-x-1">
                  <Text style={{ fontFamily: "PoppinsMedium" }}>Aula:</Text>
                  <Text className="font-poppins">{leason.name}</Text>
                </View>
                <View className="flex-row space-x-1">
                  <Text style={{ fontFamily: "PoppinsMedium" }}>
                    Professor:
                  </Text>
                  <Text className="font-poppins">{leason.teacher.name}</Text>
                </View>
                <View className="flex-row space-x-1">
                  <Text style={{ fontFamily: "PoppinsMedium" }}>Data:</Text>
                  <Text className="font-poppins">{leasonDateString}</Text>
                </View>
              </View>
              <Feather
                name={leasonStatusIcon[leason.status]}
                size={22}
                color="green"
              />
            </TouchableOpacity>
          );
        })}
        {/* <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View>
        <View className="w-full h-24 rounded-xl bg-gray-500"></View> */}
      </View>
    </ScrollView>
  );
}
