import api from './api';
import { Currency } from '../types/currency';

export const getAllCurrencies = (): Promise<Currency> => api.get('/latest?base=UAH');

export const getCurrency = (fromCurrency: string, toCurrency: string): Promise<Currency> =>
  api.get(`/convert?from=${fromCurrency}&to=${toCurrency}`);
