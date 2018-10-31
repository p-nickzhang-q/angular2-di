import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
  // providers: [{ provide: ProductService, useClass: AnotherProductService }]// 当声明在组件中时，只对自己和自己的子组件可见
})
export class Product2Component implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
