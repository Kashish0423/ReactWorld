import React, { useState } from "react";
import styles from "./BreakingBad.module.css";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className={styles.search}>
      <form>
        <input
          type='text'
          className={styles.bbinput}
          placeholder='Find your Favourite Character'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
