import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
userId !: number;
userObj !: Iusers
  constructor(private _route : ActivatedRoute,
    private _usersService : UsersService) { }

  ngOnInit(): void {

    this.userId = +this._route.snapshot.params['userId']
    this.userObj = this._usersService.getSingleUser(this.userId)



  }

}
