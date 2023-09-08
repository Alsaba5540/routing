import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from '../../model/users';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId !: number;
  productObj !: Iproducts

  constructor(private _route : ActivatedRoute,
    private _productService : ProductsService  ) { }

  ngOnInit(): void {

    this.productId = +this._route.snapshot.params['productId'];
    this.productObj = this._productService.getSingleProduct(this.productId)

    // this.productObj = this._productService.getSingleProduct(this.productId)

    // this._route.params
    //    .subscribe((myParams: Params) => {
    //     this.productId = +myParams['productId'];
    //     this.productObj = this._productService.getSingleProduct(this.productId)
    //    })
  }

}
