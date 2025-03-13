import css from "./SearchBar.module.css";
import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  // const notify = () => toast("please full fill some searching info");
  // if (values.info === '') {
  //   return <Toaster />;
  // }
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
