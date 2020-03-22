import { Injectable } from '@angular/core';
import { Data } from './MockData';
import { Product } from './product';

@Injectable()
export class ProductService {
  products = Data;
  constructor() { }

  getProduct(){
    return this.products;
  }

}