import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleSearch = async (topik) => {
    try {
      const data = await fetchPhotos(topik);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(clicks);
  //   async function getPhotos() {
  //     try {
  //       const data = await fetchPhotos();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getPhotos();
  // }, [clicks]);

  return (
    <>
      <SearchBar onSearch={handleSearch} clicks={clicks} />
    </>
  );
}
