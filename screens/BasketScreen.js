import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotalPrice,
} from "../slices/basketSlice";
import { TrashIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const [groupedItems, setGroupedItems] = useState({});

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectBasketTotalPrice);

  useMemo(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
    setGroupedItems(groupedItems);
  }, [items]);

  useEffect(() => {
    if (!items.length) navigation.goBack();
  }, [items]);

  const removeItemFromBasket = (id) => {
    if (!items.length) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <View className="pt-4 relative h-full">
      <Text className="text-3xl font-bold text-center">{restaurant.title}</Text>
      <ScrollView className="">
        <View className="mt-4 pb-10">
          {Object.values(groupedItems).map((items) => (
            <View
              key={items[0].id}
              className="flex-row p-4 bg-white justify-between items-center"
            >
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[#00CCBB] font-bold">
                  {items.length} X{" "}
                </Text>
                <Image
                  source={{ uri: items[0].imgUrl }}
                  className="h-16 w-16 rounded-full"
                />
                <Text className="text-lg font-semibold">{items[0].title}</Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Text className="text-lg font-bold">
                  Rs. {items[0].price * items.length}
                </Text>
                <TouchableOpacity
                  onPress={() => removeItemFromBasket(items[0].id)}
                >
                  <TrashIcon color="#00CCBB" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="bg-white py-4 border-t-4 border-gray-100">
        <View className="flex-row justify-between px-4 py-2">
          <Text className="text-lg text-gray-400">Subtotal</Text>
          <Text className="text-lg text-gray-400">Rs. {totalPrice}</Text>
        </View>
        <View className="flex-row justify-between px-4 py-2">
          <Text className="text-lg text-gray-400">Delivery Fee</Text>
          <Text className="text-lg text-gray-400">Rs. 50</Text>
        </View>
        <View className="flex-row justify-between px-4 py-2">
          <Text className="text-lg font-extrabold">Total Price</Text>
          <Text className="text-lg font-extrabold">Rs. {totalPrice + 50}</Text>
        </View>
        <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-4 mt-4 mx-6">
          <Text className="font-bold text-white text-lg text-center">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
