import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from '../../model/users';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ProductInfo : Array<Iproducts> = []
  constructor(private _productsService : ProductsService ,
    private _router : Router) { }

  ngOnInit(): void {
    this.ProductInfo = this._productsService.getAllProducts()

  }

  onUsersShow(){
   this._router.navigate(['/users'])


  }
  

}
