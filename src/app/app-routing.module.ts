import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditproductComponent } from './shared/components/editproduct/editproduct.component';
import { EdituserComponent } from './shared/components/edituser/edituser.component';

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
      path: "products/:productId/edit" , component : EditproductComponent
    },
    {
      path: "users/:userId/editUser" , component:EdituserComponent
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
