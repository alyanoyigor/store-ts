interface IPerson {
  name: string;
}

enum Producer {
  KyivKhlib = 'Kyiv Khlib Company',
  Premia = 'Premia',
  SvoyaLiniya = 'Svoya Liniya',
}

type TProduct = {
  name: string;
  price: number;
  producer: Producer;
};

const testProduct: TProduct = {
  name: 'Morozyvo',
  price: 15,
  producer: Producer.SvoyaLiniya,
};

class Warehouse {
  private products: TProduct[] = [];
}

class Cashier {}

class WarehouseManager {}

class Supermarket {
  readonly PRODUCT_PRICE = 10;
  private balance = 0;
  private productsCount = 100;
  public sell(productCount: number, customer: Customer) {
    if (productCount > this.productsCount) {
      throw new Error(
        `Not enough products in store, you are able to buy ${this.productsCount}`
      );
    }
    const totalSum = productCount * this.PRODUCT_PRICE;
    this.takeMoneyFromCustomer(customer, totalSum);
    this.giveCustomerProducts(customer, productCount);
  }
  protected takeMoneyFromCustomer(customer: Customer, amount: number) {
    customer.giveMoney(amount);
    this.balance += amount;
  }
  protected giveCustomerProducts(customer: Customer, productsCount: number) {
    this.productsCount -= productsCount;
    customer.takeProducts(productsCount);
  }
}

class Customer {
  private productsCount = 0;
  constructor(public name: string, private balance: number) {}
  public giveMoney(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error('Not enough money...');
    }
  }
  public takeProducts(productsCount: number) {
    this.productsCount += productsCount;
  }
}

const market = new Supermarket();
const volodya = new Customer('Volodya', 30);
market.sell(2, volodya);
console.log(volodya);
console.log(market);
