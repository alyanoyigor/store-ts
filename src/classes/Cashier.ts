import { TProduct, TProductList } from './../types/index';
import { IPerson } from '../types';
import Customer from './Customer';
import Supermarket from './Supermarket';

class Cashier implements IPerson {
  private products: TProductList | undefined;
  constructor(
    public name: string,
    public market: Supermarket,
    private balance: number = 0
  ) {}

  getProductsInfo(products: TProductList) {
    this.products = products;
  }

  public sell(customerProducts: TProduct[], customer: Customer) {
    customerProducts.forEach((customerProduct) => {
      if (this.products) {
        const totalProductAmount =
          this.products[customerProduct.producer].amount;
        if (customerProduct.amount > totalProductAmount) {
          throw new Error(
            `Not enough products in store, you are able to buy ${totalProductAmount}`
          );
        }
      }
    });

    const totalSum = customerProducts.reduce(
      (accumulator, customerProduct) =>
        accumulator + customerProduct.amount * customerProduct.price,
      0
    );

    this.takeMoneyFromCustomer(customer, totalSum);
    this.giveCustomerProducts(customer, customerProducts);
  }

  protected takeMoneyFromCustomer(customer: Customer, amount: number) {
    customer.giveMoney(amount);
    this.balance += amount;
  }

  protected giveCustomerProducts(
    customer: Customer,
    customerProducts: TProduct[]
  ) {
    customerProducts.forEach((customerProduct) => {
      if (this.products) {
        this.products[customerProduct.producer].amount -=
          customerProduct.amount;
      }
    });
    customer.takeProducts(customerProducts);
    this.updateProductsInMarket();
  }

  protected updateProductsInMarket() {
    if (this.products) {
      this.market.updateProducts(this.products);
    }
  }
}

export default Cashier;
