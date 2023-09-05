import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotalPrice,
} from "../slices/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketBanner = () => {
  const navigation = useNavigation();
  const basketTotalPrice = useSelector(selectBasketTotalPrice);
  const items = useSelector(selectBasketItems);

  if (!items.length) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center justify-between"
      >
        <Text className="text-white font-extrabold text-lg">
          {items.length}
        </Text>
        <Text className="text-white text-lg font-bold">View Basket</Text>
        <Text className="text-white font-extrabold text-lg">
          Rs. {basketTotalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketBanner;
