import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";
import İmageGallery from "../İmageGallery/İmageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setİsloading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTearm, setSearchTearm] = useState("");

  const handleSearch = async (topic) => {
    setSearchTearm(topic);
    setPage(1);
    // try {
    //   setError(false);
    //   setİsloading(true);
    //   setPhotos([]);
    //   const data = await fetchPhotos(topik);
    //   setPhotos(data);
    //   setİsloading(false);
    // } catch (error) {
    //   setError(true);
    // } finally {
    //   setİsloading(false);
    // }
  };
  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchPhotos(searchTearm, page);
        setPhotos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [page, searchTearm]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}

      {photos.length > 0 && <İmageGallery items={photos} />}

      {isLoading && <Loader />}

      {photos.length > 0 && <LoadMoreBtn handleClick={handleClick} />}
    </>
  );
}
