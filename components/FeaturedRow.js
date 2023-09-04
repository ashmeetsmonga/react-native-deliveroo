import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { urlFor } from "../lib/sanity";

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUrl={urlFor(restaurant.image).url()}
            rating={restaurant.rating}
            genre={restaurant.category.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            long={restaurant.long}
            lat={restaurant.lat}
            dishes={restaurant.dishes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
