import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";

export default function ImageGallery({ items }) {
  const [modalİsOpen, setModalİsOpen] = useState(false);
  const [selectedİmage, setSelectedİmage] = useState(null);

  const openModal = (item) => {
    setSelectedİmage(item);
    setModalİsOpen(true);
  };

  const closeModal = () => {
    setModalİsOpen(false);
  };

  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => openModal(item)} />
        </li>
      ))}

      <ImageModal
        isOpen={modalİsOpen}
        onClose={closeModal}
        image={selectedİmage}
      />
    </ul>
  );
}
