import { Component, OnInit } from '@angular/core';
import{ Data } from '../MockData';
import{ Product } from '../product'
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=Data;
  removeItem(id){
    this.products= this.products.filter(products => products.id !==id);
  }

}
