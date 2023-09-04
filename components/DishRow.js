import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../slices/basketSlice";

const DishRow = ({ id, title, description, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, description, price, imgUrl }));
  };

  const removeItemFromBasket = () => {
    if (!items.length) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="p-4 bg-white border-t-2 border-gray-100"
      >
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{title}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-lg mb-1 font-bold">Rs. {price}</Text>
          </View>
          <View className="">
            <Image
              source={{ uri: imgUrl }}
              className="p-4 h-20 w-20 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-2">
          <View className="flex-row space-x-2 items-center pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
