import Cashier from './classes/Cashier';
import Customer from './classes/Customer';
import Supermarket from './classes/Supermarket';
import Warehouse from './classes/Warehouse';
import WarehouseManager from './classes/WarehouseManager';
import { customerProducts, desirableProducts } from './constants';

const warehouse = new Warehouse();
const warehouseManager = new WarehouseManager('Maria');
const market = new Supermarket(2000);
const cashier = new Cashier('Viktor', market);
const customer = new Customer('Volodya', 30);

warehouse.giveProductsToManager(warehouseManager, desirableProducts);
warehouseManager.giveProductsToMarket(market);
market.takeProductsFromWarehouseManager(desirableProducts);
market.giveCashierInfoAboutProducts(cashier);

cashier.sell(customerProducts, customer);
