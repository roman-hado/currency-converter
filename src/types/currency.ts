import { Rate } from './rate';

export interface Currency {
  date: string;
  rates: Rate;
  success: boolean;
  result: number;
}
