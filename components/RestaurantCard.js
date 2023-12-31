import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      className="bg-white mr-3 shadow"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row gap-2 items-center">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-gray-500 flex-wrap">
            Nearby •{" "}
            {address.length > 20 ? address.substring(0, 17) + "..." : address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
