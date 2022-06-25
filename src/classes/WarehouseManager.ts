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
    market.takeProductsFromWarehouseManager(this.products);
  }
}

export default WarehouseManager;
