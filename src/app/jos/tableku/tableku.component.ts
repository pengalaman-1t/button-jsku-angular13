import { Component, OnInit } from '@angular/core';
import UsersJson from './users.json';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-tableku',
  templateUrl: './tableku.component.html',
  styleUrls: ['./tableku.component.css']
})
export class TablekuComponent implements OnInit {

  Users: USERS[] = UsersJson;
  constructor() { 
    console.log(this.Users);

  }

  ngOnInit(): void {
  }

}
