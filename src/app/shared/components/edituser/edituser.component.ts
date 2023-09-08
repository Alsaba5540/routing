import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
userId !: number;
userObj !: Iusers
  constructor(private _route : ActivatedRoute,
    private _userService : UsersService,
    private _router : Router ) { }

    ngOnInit(): void {
      this.userId = +this._route.snapshot.params['userId']
      this.userObj = this._userService.getSingleUser(this.userId)
      // console.log(this.userObj)
       
      
      
      }
  
  onUpdateuser(userName : HTMLInputElement){
   let  obj : Iusers ={
    userName : userName.value ,
    userId : this.userId
   }
   this._userService.getUpdatedUser(obj)
   this._router.navigate(['users' , this.userId])
  }

}
