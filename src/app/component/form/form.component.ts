import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(private firebse: FirebaseService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.firebse
      .addUser(
        'https://esercizioangular-eb578-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        {
          name: this.form.value.name,
          email: this.form.value.email,
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
