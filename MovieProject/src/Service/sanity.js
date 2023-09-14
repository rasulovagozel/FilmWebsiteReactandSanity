import sanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

// export const sanityClient = SanityClient(sanityClientConfig);

export const client = sanityClient({
  projectId: "rsn4qr6y",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:"skgQ33QOdB1SmE58IE4VYNJZgs0hmF7JX7y3wbZ8HOhcAqpwSQqLZKMR4arV9IxQ1Jgg9rZPLrzBGbB6XOwADyWnGLXkP9LgPkIobHkT2ysfm8inrw3RByDyCRSgY0C7t3hbw1fm1jnjPHMR80YNZgMgcKOiejTCCKJGlYTn43aLNzi8mPQA",
  useCdn: true,
});
const builder = imageurlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};