import { TeacherCard } from "@/components/cards/TeacherCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const [vehicles, setVehicles] = useState<any>([]);
  const [teachers, setTeachers] = useState<any>([]);
  const [leasons, setLeasons] = useState<any>([]);
  const [completedLeasons, setCompletedLeasons] = useState<any>([]);

  function getTeachers() {
    axios
      .get("http://192.168.0.30:6661/users")
      .then((response) => setTeachers(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <ScrollView className="bg-white">
      <View className="py-2 px-5">
        <View className="space-y-3">
          {teachers.map((teacher) => (
            <TeacherCard {...teacher} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
