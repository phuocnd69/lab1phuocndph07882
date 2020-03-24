import { Injectable } from '@angular/core';

import{ Data } from './MockData';
import{ Product } from './product';
import{ HttpClient} from '@angular/common/http';
import{ Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e79b9de17314d001613350f.mockapi.io/product'
  // products=Data;
  constructor(
    private http: HttpClient,
  ) { }
 

  getProducts(): Observable<Product[]>{
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id) : Observable<Product> {

    return this.http.get<Product> (`${this.api}/${id}`);
  }
  
addProduct(product){
  console.log(product);
  let newObj = {  ...product };
  // this.products.push(newObj);
  
}

}
