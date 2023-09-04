import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative bg-black rounded">
      <Image
        source={{ uri: imgUrl }}
        className="opacity-70 h-20 w-20 rounded"
      />
      <Text className="absolute z-10 bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
