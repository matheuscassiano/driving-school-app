import { CarCard } from "@/components/cards/CarCard";
import { LessonsCountCard } from "@/components/cards/LessonsCountCard";
import { MinNextLessonsCard } from "@/components/cards/MinNextLessonsCard";
import { TeacherCard } from "@/components/cards/TeacherCard";
import { ProgressBar } from "@/components/ProgressBar";
import { DrivingClassStatus } from "@/enums/driving-class-status.enum";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [vehicles, setVehicles] = useState<any>([]);
  const [teachers, setTeachers] = useState<any>([]);
  const [leasons, setLeasons] = useState<any>([]);
  const [completedLeasons, setCompletedLeasons] = useState<any>([]);
  const [notCompletedLeasons, setNotCompletedLeasons] = useState<any>([]);

  const navigation = useNavigation();

  const handleLessons = () =>
    navigation.navigate("(tabs)", { screen: "course" });

  const handleVehicles = () =>
    navigation.navigate("(tabs)", { screen: "vehicles" });

  const handleTeachers = () =>
    navigation.navigate("(tabs)", { screen: "teachers" });

  // get only 4 items
  function getVehicles() {
    axios
      .get("http://192.168.0.30:6661/vehicles")
      .then((response) => setVehicles(response.data.slice(0, 4)))
      .catch((error) => console.error(error));
  }

  function getTeachers() {
    axios
      .get("http://192.168.0.30:6661/users")
      .then((response) => setTeachers(response.data.slice(0, 4)))
      .catch((error) => console.error(error));
  }

  function getLeasons(courseId: number) {
    axios
      .get(`http://192.168.0.30:6661/courses/${courseId}/leasons`)
      .then((response) => {
        setLeasons(response.data.slice(0, 4));
        setCompletedLeasons(
          response.data.filter(
            (leason: any) => leason.status === DrivingClassStatus.FINISHED
          )
        );
        setNotCompletedLeasons(
          response.data.filter(
            (leason: any) => leason.status !== DrivingClassStatus.FINISHED
          )
        );
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getVehicles();
    getTeachers();
    getLeasons(1);
  }, []);

  return (
    <ScrollView className="bg-white">
      <View className="gap-y-4 py-2 px-5">
        <View>
          <TouchableOpacity
            onPress={handleLessons}
            className="py-1 flex-row items-center justify-between"
          >
            <Text className="text-xl text-zinc-700 font-poppins my-1.5">
              Aulas realizadas
            </Text>
            <Feather name="chevron-right" size={18} color="#f97316" />
          </TouchableOpacity>
          <ProgressBar progress={completedLeasons.length / leasons.length} />
          <LessonsCountCard
            className="mt-2"
            lessons={completedLeasons.length}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={handleLessons}
            className="flex-row items-center justify-between"
          >
            <Text className="text-xl text-zinc-700 font-poppins mb-2">
              Próximas aulas
            </Text>
            <Feather name="chevron-right" size={18} color="#f97316" />
          </TouchableOpacity>
          <View className="flex-wrap justify-around w-full gap-y-3">
            <View className="flex-row gap-x-3">
              {notCompletedLeasons.map((leason: any) => (
                <MinNextLessonsCard
                  teacher={leason.teacher.name}
                  vehicle={leason.vehicle.model}
                />
              ))}
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleVehicles}
            className="flex-row items-center justify-between"
          >
            <Text className="text-xl text-zinc-700 font-poppins mb-2">
              Veículos
            </Text>
            <Feather name="chevron-right" size={18} color="#f97316" />
          </TouchableOpacity>

          <View className="flex space-y-3">
            {vehicles.map((vehicle) => (
              <CarCard {...vehicle} />
            ))}
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleTeachers}
            className="flex-row items-center justify-between mb-2"
          >
            <Text className="text-xl text-zinc-700 font-poppins">
              Professores habilitados
            </Text>
            <Feather name="chevron-right" size={18} color="#f97316" />
          </TouchableOpacity>

          <View className="space-y-3">
            {teachers.map((teacher) => (
              <TeacherCard {...teacher} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
