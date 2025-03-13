import css from "./İmageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <div>
      <img
        className={css.galleryİmg}
        src={item.urls.small}
        alt={item.description}
      />
    </div>
  );
}
