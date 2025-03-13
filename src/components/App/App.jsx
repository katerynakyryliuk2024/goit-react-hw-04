import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";
import İmageGallery from "../İmageGallery/İmageGallery";

export default function App() {
  const [photos, setPhotos] = useState([]);

  const handleSearch = async (topik) => {
    try {
      const data = await fetchPhotos(topik);
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <İmageGallery items={photos} />
    </>
  );
}
