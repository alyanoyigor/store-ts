import Supermarket from './Supermarket';
import { TProductList, IPerson } from '../types';

class WarehouseManager implements IPerson {
  private products: TProductList | undefined;
  constructor(public name: string, private balance: number = 0) {}

  public getProductsFromWarehouse(products: TProductList) {
    this.products = products;
  }

  public giveProductsToMarket(market: Supermarket) {
    if (this.products === undefined) {
      throw new Error("Manager haven't products");
    }
    const totalSum = Object.values(this.products).reduce(
      (accumulator, customerProduct) =>
        accumulator + customerProduct.amount * customerProduct.price,
      0
    );
    this.giveMoneyFromMarket(market, totalSum);
    market.takeProductsFromWarehouseManager(this.products);
    console.log('Manager balance', Number(this.balance.toFixed(2)));
  }

  protected giveMoneyFromMarket(market: Supermarket, amount: number) {
    market.giveMoney(amount);
    this.balance += amount;
  }
}

export default WarehouseManager;
