import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const onSubmit = () => {
    console.log(setClicks(clicks + 1));
  };

  useEffect(() => {
    async function getPhotos() {
      try {
        const data = await fetchPhotos();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPhotos();
  }, []);
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}
