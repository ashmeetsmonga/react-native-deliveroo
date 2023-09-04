import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../lib/sanity";
import { categoriesQuery } from "../lib/sanityQueries";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(categoriesQuery).then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
