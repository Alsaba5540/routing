import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !: number;
  userObj !: Iusers
    constructor(private _route : ActivatedRoute,
                 private _usersService : UsersService) { }
  
    ngOnInit(): void {
      // console.log(this._route.snapshot.params)
      // this.userId = + this._route.snapshot.params['userId']
      // console.log(this.userId)
      // this.userObj = this._usersService.getSingleUser(this.userId)
      
      this._route.params
          .subscribe((myParams :Params ) => {
            this.userId = +myParams['userId']
            this.userObj = this._usersService.getSingleUser(this.userId)!
          })
  
  
    }
  
  }
  