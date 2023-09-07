import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path : '' , redirectTo : 'home' , pathMatch : 'full'
  },
  {
    path : "home" , component : DashboardComponent
  },
  {
    path : "users" , component : UsersComponent
  },
  {
    path: "products" , component : ProductsComponent
  },
  {
    path: "users/:userId" , component : UserComponent
  },
  
  
    {
      path: "products/:productId" , component : ProductComponent
    },
    {
      path: "products/:productsId/edit" , component : EditProductComponent
    },
    {
      path: "users/:userId/userEdit" , component : EditUserComponent
    },
    
    
    {
     path : "**" , redirectTo : 'pageNotFound'
    },
    {
      path: "pageNotFound"  , component : PageNotFoundComponent
    }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
