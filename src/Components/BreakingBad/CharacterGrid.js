import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";
import Styles from "./BreakingBad.module.css";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className={Styles.cards}>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
