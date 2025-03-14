import css from "./İmageCard.module.css";

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
