import css from "./ImageCard.modules.css";

export default function ImageCard({ item, onClick }) {
  return (
    <div>
      <img
        className={css.galleryİmg}
        src={item.urls.small}
        alt={item.description}
        onClick={onClick}
      />
    </div>
  );
}
