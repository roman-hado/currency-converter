import React, { useEffect, useState } from 'react';
import './App.css';
import { CurrencyConverter } from './components/CurrencyConverter/CurrencyConverter';
import { getAllCurrencies } from './services/currencies';
import { Rate } from './types/rate';
import { Header } from './components/Header/Header';

function App() {
  const [rates, setRates] = useState<Rate | null>(null);

  useEffect(() => {
    getAllCurrencies()
      .then(res => setRates(res.rates));
  }, []);

  return (
    <div>
      <Header rates={rates} />
      <h1 className="title">Currency Converter</h1>

      {rates &&
        <CurrencyConverter rates={rates} />
      }
    </div>
  );
}

export default App;
