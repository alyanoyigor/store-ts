import { Producer, TProductList } from '../types';

export const products: TProductList = {
  [Producer.CocaCola]: {
    name: 'Coca Cola',
    price: 29.99,
    producer: Producer.CocaCola,
    amount: 1000,
  },
  [Producer.Danone]: {
    name: 'Danone blueberry yogurt drinking 1.5%',
    weight: '800g',
    price: 53.99,
    producer: Producer.Danone,
    amount: 500,
  },
  [Producer.AVK]: {
    name: 'AVK "Trufalie" candies',
    price: 74.49,
    producer: Producer.AVK,
    amount: 5000,
  },
  [Producer.Millennium]: {
    name: 'Millennium Favorite milk chocolate',
    weight: '100g',
    price: 29.99,
    producer: Producer.Millennium,
    amount: 6000,
  },
};

export const desirableProducts: TProductList = {
  [Producer.CocaCola]: {
    name: 'Coca Cola',
    price: 29.99,
    producer: Producer.CocaCola,
    amount: 900,
  },
  [Producer.Danone]: {
    name: 'Danone blueberry yogurt drinking 1.5%',
    weight: '800g',
    price: 53.99,
    producer: Producer.Danone,
    amount: 100,
  },
  [Producer.AVK]: {
    name: 'AVK "Trufalie" candies',
    price: 74.49,
    producer: Producer.AVK,
    amount: 4500,
  },
  [Producer.Millennium]: {
    name: 'Millennium Favorite milk chocolate',
    weight: '100g',
    price: 29.99,
    producer: Producer.Millennium,
    amount: 5500,
  },
};
