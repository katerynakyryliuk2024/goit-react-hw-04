import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form className={css.searchForm}>
        <input
          className={css.searchİnput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBnt} onClick={onSubmit} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
