import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { SlideComponent } from './slide/slide.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    SlideComponent,
    ProductManagerComponent,
    AboutComponent,
    ServiceComponent,
    HomepageComponent,
    NotFoundComponent,
    AddProductComponent,
    ProductDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
