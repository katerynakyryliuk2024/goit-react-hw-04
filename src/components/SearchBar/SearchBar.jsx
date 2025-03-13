import css from "./SearchBar.module.css";
import { Formik, Field, Form } from "formik";

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{
          info: "",
        }}
        onSubmit={(values, actions) => {
          onSearch(values.info);
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchİnput}
            type="text"
            name="info"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBnt} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
