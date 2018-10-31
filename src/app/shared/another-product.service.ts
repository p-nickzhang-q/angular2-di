import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService extends ProductService {

  constructor(logger: LoggerService) {
    super(logger);
  }

  getProduct(): Product {
    this.logger.log('AnotherProductService => getProduct')
    return new Product(1, 'IPhone8', 8799, '最新苹果手机');
  }
}
