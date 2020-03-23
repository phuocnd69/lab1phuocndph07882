import { Component, OnInit } from '@angular/core';
import{ Data } from '../MockData';
import{ Product } from '../product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=Data;
  selected: Product;
  showDetail(product){
    this.selected=product;
    console.log(product);
  }
  // removeItem(id){
  //   this.products= this.products.filter(products => products.id !==id);
  // }

}
