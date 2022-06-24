interface IPerson {
  name: string;
}

enum Producer {
  KyivBread = 'KyivBread',
  Premiya = 'Premiya'
}

type IProduct = {
  name: string;
  price: number;
  producer: Producer;
};

class Customer {
  private productsCount = 0;
  constructor(public name: string, private balance: number) {}

  public giveMoney(amount: number) {
    if (this.balance <= amount) {
      throw new Error('not enough money');
    }
    this.balance -= amount;
  }

  public takeProducts(productsCount: number) {
    this.productsCount += productsCount;
  }
}

class Supermarket {
  readonly PRODUCT_PRICE = 10;
  private productsCount = 100;
  private balance = 0;

  public sell(productCount: number, customer: Customer) {
    if (productCount > this.productsCount) {
      throw new Error('Not enough products in market');
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

const market = new Supermarket();
const person = new Customer('Vova', 30);
market.sell(2, person);
