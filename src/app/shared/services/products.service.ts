import { Injectable } from '@angular/core';
import { Iproducts } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray: Array<Iproducts> = [
  {
    pName : "Iphone 14 Pro Max",
    pId :1 ,
    pStatus : "In-process",
  },
  {
    pName : "Ipad",
    pId : 2,
    pStatus :"In-process" ,
  },
   {
    pName :"Nokia TV" ,
    pId : 3,
    pStatus : "Dileverd",
  }, 
  {
    pName : "SONY handset",
    pId : 4,
    pStatus : "Dileverd",
  }, 
  {
    pName : "Lenovo Laptop",
    pId :5 ,
    pStatus : "Dileverd",
  }
]
  constructor() { }

  getAllProducts() : Array<Iproducts> {
    return this.productsArray

  }
  // getSingleObject(id : number) {
  //    return this.productsArray.find(product => product.pId === id)
  // }

  getSingleProduct(id : number){
    return this.productsArray.find(pro => pro.pId === id )!
  }
}
