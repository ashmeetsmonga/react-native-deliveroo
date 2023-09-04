import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "9oq76x4k",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-08-03",
});

const builder = imageUrlBuilder(client);
export const urlFor = (src) => builder.image(src);

export default client;
