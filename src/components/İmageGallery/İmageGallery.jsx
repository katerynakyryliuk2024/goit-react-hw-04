import css from "./İmageGallery.module.css";
import İmageCard from "../İmageCard/İmageCard";
import İmageModal from "../İmageModal/İmageModal";
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
          <İmageCard item={item} onClick={() => openModal(item)} />
        </li>
      ))}

      <İmageModal
        isOpen={modalİsOpen}
        onClose={closeModal}
        image={selectedİmage}
      />
    </ul>
  );
}
