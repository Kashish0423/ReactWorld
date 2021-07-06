import React, { useState, useEffect } from "react";
import styles from "./BreakingBad.module.css";
import Header from "./Header";
import CharacterGrid from "./CharacterGrid";
import axios from "axios";
import Search from "./Search.js";
import cx from "classnames";

const BreakingBadApp = () => {
  const mystyle = {
    backgroundImage: ` url("https://cutewallpaper.org/21/green-gradient-background-hd/10-Most-Popular-Dark-Green-Wallpaper-Hd-Full-Hd-1920A-1080-.jpg")`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    height: `100vh`,
    color: `#fff`,
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div
      className={cx(styles.div, styles.body)}
      // style={{
      //   backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBwcHBwoNCAcHBhYHBwcIBw8ICQcWIB0YIiARHxUYKDQsJCYxJxwfJzEhKSs3Ljo2IiszOD8vNzQ5LjcBCgoKDQ0NDg0NECsZFRkrKysrKzc3KzcrKysrKysrKysrKzctNy0rKysrKysrKysrLSsrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAACAAEFAwQH/8QAJBABAQEAAQIEBwAAAAAAAAAAABEBAhITAyIxQQQhUXGBkeH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQQFA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwD5vVQra5UcWFW0KqQh1tCqkSHVRqqQh1UaqRIdVCtpCFW0KqkSHW0KqQh1UaqkSHVRqpEh1UK2kIVbQrakSFW0KqQh1DVUiQ0NVCEmVUGpiBqSESSBz6qNVaI1w6qNVSJDqoVtIQq2hW0iQq2hVUhDqo1UiQ6qNVSEOqhW0iQ6qFbQhVtCqpEh1UaqQh1UaqkSHVQraQhVtCtpEhVtCtqQhVtCqkSHVRqqQh1UaqRIdVCtqQjm1tCtrVGyFW0KqRIdbQqqQh1UaqRIdVCtqQh1UK2kSFW0K2kIVVGqpEh1UaqQh1UaqkSHVQraQhVtCqpEh1tCqkIdVGqkSHVRqqQh1UK2kSFW0K2kIVbQqqRIdVGqkI51VGqtMbIdVGqkSFW0K2kIVbQrakSFW0KqQh1UaqkSHVRqpCHVQrakSHVQraQhVtCqkSHW0KqkIdVGqkSHVRqqQhVtCtpEhVtCqkIdbQqqRIdVGqkSHVQrakIdVCtpEjm1tCtrVG2FW0KqkSHVRqpCHVRqqRIdVCtpCHVQraRIVbQrakIVVGqkSHVRqqQh1UaqRIdVCtpEhVtCtqQhVtCqkSHVRqqQh1UaqRIdVCtqQh1UK2kSFW0K2kIVVGqpEjnVUaq1Rth1UK2kSFW0K2pCFW0K2kSFW0KqkIdVGqkSHVQrakSHVQraQhVtCtpEhVtCqpCHW0KqRIdVGqpCHVQraRIVbQraQhVtCtqRIVbQqpCHVRqqRIdVCtpCHVQrakSObW0K2tUbYVbQqpEh1UaqkIdVCtpEh1UK2kSHVQrakIVbQqpEh1UaqkIdVGqkSHVQraQh1UK2pEhVtCqkIdbQqqRIdVGqkIdVCtqRIdVCtpCHVQraRIVbQqqQh1UaqRI51VGqtUbYdVCtqRIdVCtpEhVtCqpCHW0KqRIdVGqkIdVGqpEh1UK2kIVbQqqRIdbQqpCHVRqqRIdVGqkIdVCtpEhVtCtqQhVtCqkSHVRqqQh1UaqRIdVCtpCHVQrakSObW0K2tUbIVVGqpCHVRqpEh1UK2kIdVCtqRIVbQraQhVtCqpEh1UaqQh1UaqRIdVCtqQh1UK2kSFW0K2pCFW0KqRIdVGqpCHVQraRIdVCtpEhVtCtqQhVtCqkSHVRqqQjnVViamwqqKCHVRVSJCraFVIQ62hVSJDqo1VIQ6qNVIkKtoVtSEKtoVUiQ62hVSEOqjVUiQ6qNVIQ6qFbUiQq2hW0iQq2hVUhDqo1UiQ6qNVIQ6qNVSJCraFbSEeiknu0pJAkkCSQJJA2qpAq2pAqq1IiqqQNqqSI2qpCKtqSCqqQNqqQjaqkgq2pCKvL4Pb3eXc2TjeOby6c38pAWZ4HTd5ct5XfLnl+s9vse8Phsudzd3M2bxzd6vT+pIg5ngZm3nuzj8szdzq39B4nRnLe3u7x9t31SB//Z")`,
      // }}
      style={mystyle}
    >
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      {/* <Footer /> */}
    </div>
  );
};

export default BreakingBadApp;
