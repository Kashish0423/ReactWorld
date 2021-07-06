import React from "react";
import styles from "./Coin.module.css";
import cx from "classnames";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className={styles.coincontainer}>
      <div className={styles.coinrow}>
        <div className={styles.coin}>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className={styles.coinsymbol}> {symbol}</p>
        </div>

        <div className={styles.coindata}>
          <p className={styles.coinprice}>${price}</p>
          <p className={styles.coinvolume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={cx(styles.coinpercent, styles.red)}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={cx(styles.coinpercent, styles.green)}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className={styles.coinmarketcap}>
            {" "}
            Mkt Cap ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
