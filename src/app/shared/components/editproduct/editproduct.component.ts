import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproducts, Istatus } from '../../model/users';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
productId !: number;
productObj !: Iproducts
  constructor(private _route : ActivatedRoute,
     private _router : Router,
    private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['productId']
    this.productObj = this._productService.getSingleProduct(this.productId)
  }
  onProUpdate(pName : HTMLInputElement , pStatus : HTMLSelectElement){
    let obj : Iproducts ={
      pName: pName.value,
      pId:this.productId,
      pStatus: pStatus.value as Istatus 
    }
    this._productService.updateProductDetails(obj);
    this._router.navigate(['products' , this.productId])

  }

}
