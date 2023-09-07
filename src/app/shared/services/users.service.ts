import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray :Array<Iusers>= [
    {
      userName : "Jhon",
      userId : 1 
    },
    {
      userName : "June",
      userId : 2
    }, {
      userName : "May",
      userId : 3
    }, {
      userName : "Marry",
      userId : 4 
    }, {
      userName : "July",
      userId : 5
    }
  ]

  constructor() { }
 getAllUsers():Array<Iusers>{
  return this.usersArray
 }
 getSingleUser(id : number){
  return this.usersArray.find(user => user.userId === id )!
 }
 

}

