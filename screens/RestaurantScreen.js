import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import { urlFor } from "../lib/sanity";
import BasketBanner from "../components/BasketBanner";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

const RestaurantScreen = () => {
  const route = useRoute();
  const {
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
  } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, []);

  return (
    <>
      <BasketBanner />
      <View>
        <ScrollView>
          <Image source={{ uri: imgUrl }} className="h-56 w-full rounded" />
          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row items-center space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" opacity="0.5" size={22} />
                  <Text className="text-gray-500">
                    <Text className="text-green-500">{rating}</Text> • {genre}
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <MapPinIcon color="#00CCBB" opacity={0.5} size={22} />
                  <Text className="text-gray-500 flex-wrap">{address}</Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">
                {short_description}
              </Text>
            </View>
            <TouchableOpacity className="flex-row space-x-2 p-4 items-center border-y border-gray-200">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
              <Text className="font-bold flex-1">Have a food alergy?</Text>
              <ChevronRightIcon color="#00CCBB" opacity={0.6} size={20} />
            </TouchableOpacity>
          </View>
          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {/* Dishrow */}
            {dishes?.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                description={dish.short_description}
                price={dish.price}
                title={dish.name}
                imgUrl={urlFor(dish.image).url()}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RestaurantScreen;
