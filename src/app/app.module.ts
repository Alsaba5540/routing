import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { EditproductComponent } from './shared/components/editproduct/editproduct.component';
import { EdituserComponent } from './shared/components/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    PageNotFoundComponent,
    UserComponent,
    NavbarComponent,
    EditproductComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
