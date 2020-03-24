import { Component, OnInit } from '@angular/core';
import{ Data } from '../MockData';
import{ Product } from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  showDetail(product){
    this.selected=product;
    console.log(product);
  }

  getProducts(){
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      // console.log(data);
      this.products = data;
    })
  // removeItem(id){
  //   this.products= this.products.filter(products => products.id !==id);
  // }

}
}