import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:productID', component:ProductDetailComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-manager', component: ProductManagerComponent},
  {path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
