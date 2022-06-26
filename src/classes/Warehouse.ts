import { Producer, TProduct, TProductList } from '../types';
import { products } from '../constants';
import WarehouseManager from './WarehouseManager';

class Warehouse {
  private products: TProductList = { ...products };

  public giveProductsToManager(
    manager: WarehouseManager,
    productList: TProductList
  ) {
    Object.values(productList).forEach((product) => {
      this.products[product.producer].amount -= product.amount;
    });
    manager.getProductsFromWarehouse(productList);
    console.log('Warehouse products', this.products);
  }
}

export default Warehouse;
