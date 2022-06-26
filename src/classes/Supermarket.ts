import { TProductList } from '../types';
import Cashier from './Cashier';

class Supermarket {
  private products: TProductList | undefined;
  constructor(private balance: number) {}

  public giveMoney(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error('Not enough money...');
    }
    console.log('Supermarket balance', Number(this.balance.toFixed(2)));
  }

  public takeProductsFromWarehouseManager(products: TProductList) {
    this.products = products;
  }

  public giveCashierInfoAboutProducts(cashier: Cashier) {
    if (this.products) {
      cashier.getProductsInfo(this.products);
    }
  }

  public updateProducts(products: TProductList) {
    this.products = products;
    console.log('Supermarket products', this.products);
  }
}

export default Supermarket;
