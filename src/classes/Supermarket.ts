import { TProductList } from '../types';
import Cashier from './Cashier';

class Supermarket {
  private products: TProductList | undefined;

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
  }
}

export default Supermarket;
