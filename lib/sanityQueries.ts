export const featuredCategoriesQuery = `*[_type == 'featured'] {
  ...,
  restaurants[] -> {
    ...,
    category -> {
      ...,
    },
    dishes[] -> {
      ...
    }
  }
}`;

export const categoriesQuery = `*[_type == 'category'] {
  ...
}`;
