import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';




const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'shop', component: ShopComponent
  },
  {
    path : 'shop/:name', component: CategoryComponent
  },
  {
    path : 'shop/:name/:id', component: ProductComponent
  },
  {
    path : 'cart', component: CartComponent
  },
  {
    path : 'not-found', component: NotFoundComponent
  },
  {
    path : '**', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
