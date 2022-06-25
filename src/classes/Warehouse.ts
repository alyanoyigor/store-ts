import { Producer, TProduct, TProductList } from '../types';
import { products } from '../constants';
import WarehouseManager from './WarehouseManager';

class Warehouse {
  private products: TProductList = { ...products };

  public giveProductsToManager(
    manager: WarehouseManager,
    productList: TProductList
  ) {
    Object.entries(productList).forEach(([key, value]) => {
      this.products[value.producer].amount -= value.amount;
    });
    manager.getProductsFromWarehouse(productList);
  }
}

export default Warehouse;
