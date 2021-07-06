import React, { useState, useEffect } from "react";
import styles from "./CryptoApp.module.css";
import axios from "axios";
import Coin from "./Coin";

const CryptoApp = () => {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Something went wrong"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={styles.coinapp}
      // style={{
      //   backgroundImage: `url(https://lh3.googleusercontent.com/proxy/Ay54aNGqbklYesZVde4Oq9oKaSioHce5YXYGCK4obM2v21quEk9TnK21JbSBe59lXP-twIhWTsVedftGM8YCHjVC3iJxB5icTfiwCggXOUjJPYzTswchmzRd2GNO8U8RSyfyXb16mZUvob3-YvnYAlm5Em0IHoMTv94)`,
      // }}
    >
      <div className={styles.coinsearch}>
        <h1 className={styles.cointext}>Search a currency</h1>
        <form>
          <input
            type='text'
            placeholder='Search'
            className={styles.coininput}
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
};

export default CryptoApp;
