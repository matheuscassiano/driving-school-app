import { CarCard } from "@/components/cards/CarCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const [vehicles, setVehicles] = useState<any>([]);

  function getVehicles() {
    axios
      .get("http://192.168.0.30:6661/vehicles")
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <ScrollView className="bg-white">
      <View className="py-2 px-5">
        <View className="flex space-y-3">
          {vehicles.map((vehicle) => (
            <CarCard {...vehicle} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
