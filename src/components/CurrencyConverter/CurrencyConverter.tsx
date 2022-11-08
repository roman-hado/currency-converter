import React, { useEffect, useState } from 'react';
import { useStyles } from './CurrencyConverter.styles';
import { getCurrency } from '../../services/currencies';
import { getRoundedNumber } from '../../utils/getRoundedNumber';
import { Rate } from '../../types/rate';

interface Props {
  rates: Rate;
}

export const CurrencyConverter:React.FC<Props> = ({ rates }) => {
  const [fromCurrencyName, setFromCurrencyName] = useState('UAH');
  const [toCurrencyName, setToCurrencyName] = useState('USD');
  const [fromCurrencyValue, setFromCurrencyValue] = useState(1);
  const [currencyRate, setCurrencyRate] = useState(1);

  const styles = useStyles();

  useEffect(() => {
    getCurrency(fromCurrencyName, toCurrencyName)
      .then(res => setCurrencyRate(res.result))
  }, [fromCurrencyName, toCurrencyName]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.giveWrapper}>
        <label className={styles.label}>
          <p>You give</p>
          <input
            className={styles.input}
            value={getRoundedNumber(fromCurrencyValue).toString()}
            onChange={(e) => setFromCurrencyValue(+e.target.value)}
            type="number"
          />
        </label>
        <select
          name="currency"
          value={fromCurrencyName}
          onChange={e => setFromCurrencyName(e.target.value)}
        >
          {Object.keys(rates).map(currencyName => (
            <option key={currencyName} value={currencyName}>{currencyName}</option>
          ))}
        </select>
      </div>
      <div className={styles.getWrapper}>
        <label className={styles.label}>
          <p>You get</p>
          <input
            className={styles.input}
            value={getRoundedNumber(fromCurrencyValue * currencyRate).toString()}
            onChange={(e) => setFromCurrencyValue(+e.target.value / currencyRate)}
            type="number"
          />
        </label>
        <select
          name="currency"
          value={toCurrencyName}
          onChange={e => setToCurrencyName(e.target.value)}
        >
          {Object.keys(rates).map(currencyName => (
            <option key={currencyName} value={currencyName}>{currencyName}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
