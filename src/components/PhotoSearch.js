import axios from "axios";

export const fetchPhotos = async (topic) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=SDdus_L-2oATcnD6jLgUwbLq6gPjNKxLCEuAo_e6nIA&query=${topic}`
  );
  return response.data.results;
};
