import { IPerson, TProduct } from '../types';

class Customer implements IPerson {
  private products: TProduct[] | undefined;

  constructor(public name: string, private balance: number) {}

  public giveMoney(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error('Not enough money...');
    }
  }

  public takeProducts(products: TProduct[]) {
    this.products = products;
    console.log('Customer products', this.products);
    console.log('Customer balance', Number(this.balance.toFixed(2)));
  }
}

export default Customer;
