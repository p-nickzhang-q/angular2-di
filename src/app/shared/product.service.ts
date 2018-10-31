import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({//可注射的，表示其他service可以注射到该服务中
  providedIn: 'root'
})
export class ProductService {

  constructor(protected logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('ProductService => getProduct');
    return new Product(0, 'IPhone7', 6799, '最新苹果手机');
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) { }

}