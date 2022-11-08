import React from 'react';
import { useStyles } from './Header.styles';
import { Rate } from '../../types/rate';

interface Props {
  rates: Rate | null;
}

export const Header:React.FC<Props> = ({ rates }) => {
  const styles = useStyles();
  const USD = 'USD';
  const EUR = 'EUR';

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>Currency Convector</div>
      {rates && (
        <div className={styles.ratesWrapper}>
          <div className={styles.rateWrapper} key={EUR}>
            <p>{EUR}</p>
            <p className={styles.rateValue} title='Sel'>{(1 / rates[EUR]).toFixed(3)}</p>
          </div>
          <div className={styles.rateWrapper} key={USD}>
            <p>{USD}</p>
            <p className={styles.rateValue} title='Sel'>{(1 / rates[USD]).toFixed(3)}</p>
          </div>
        </div>
      )}
    </header>
  );
};
