import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  products: Product[];
  selected : Product;
  showDetail(product){
    this.selected = product;
    console.log(this.selected);
  }
  
  changeStatus(){
    console.log('click')
  }
  removeItem(id){
    this.products = this.products.filter(x => x.id !== id);
  }

  getProducts(){
    this.products = this.productService.getProduct();
  }
}