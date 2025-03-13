import css from "./İmageGallery.module.css";
import İmageCard from "../İmageCard/İmageCard";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <İmageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
