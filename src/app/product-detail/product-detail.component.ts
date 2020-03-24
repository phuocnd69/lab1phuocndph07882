import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
// @Input() product: Product;
product: Product;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
this.router.params.subscribe(param => {
  console.log(param.productID)
 this.productService.getProduct(param.productID).subscribe(data=>{
   console.log(data);
   this.product = data;
 })
});
}
}