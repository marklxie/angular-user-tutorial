import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { User } from '../user.class';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersvc: UserService,
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {
        console.log(res);
        this.users = res as User[];
      },
      err => {console.log(err)}
    );
  }

}
