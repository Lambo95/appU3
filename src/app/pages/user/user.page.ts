import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users!: User[];
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase
      .getUser(
        'https://esercizioangular-eb578-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .subscribe((data: any) => {
        this.users = Object.keys(data).map((key) => {
          data[key]['id'] = key;
          return data[key];
        });
      });
  }

  findIndex(i: string) {
    return this.users === Object.keys(this.users);
    console.log(Object.keys(this.users));
  }

  deleteUser() {
    this.firebase
      .deleteUser(
        'https://esercizioangular-eb578-default-rtdb.europe-west1.firebasedatabase.app/users',
        this.findIndex.toString()
      )
      .subscribe((data) => {
        console.log(data);
        console.log(this.users[0].name);
      });
  }
}
