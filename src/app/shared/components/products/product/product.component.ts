import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/users';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId !: number;
  productObj !: Iproducts


  constructor(private _route : ActivatedRoute,
              private _productsService : ProductsService   ){

  }
  ngOnInit(): void {
    console.log(this._route.snapshot.params)
    this.productId = +this._route.snapshot.params['productId']
    console.log(this.productId);
    this.productObj = this._productsService.getSingleProduct(this.productId)


  }

//   ngOnInit(): void {
//    console.log(this._route.snapshot)
//    this.productId= +this._route.snapshot.params['productId']
// if(this.productId){
//   this.productObj = this._productsService.getSingleObject(this.productId)!

// }
//   }


}
