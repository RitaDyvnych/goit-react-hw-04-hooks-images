import { useState } from "react";
import PropTypes from "prop-types";
import style from "./styles.module.css";

export default function Searchbar({ onSubmit }) {
  const [find, setFind] = useState("");

  const handleChangeInput = (e) => {
    setFind(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (find.trim() === "") {
      alert("Please type searchihg query");
      return;
    }
    onSubmit(find);
    setFind("");
  };

  return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            value={find}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChangeInput}
          />
        </form>
      </header>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
