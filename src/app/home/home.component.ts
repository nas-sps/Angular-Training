import { Component } from '@angular/core';


interface UserForm {
  fName: string;
  lName: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Users: UserForm[] = [];
  user : UserForm = {
    fName: "",
    lName: "",
    email: ""
  }
  onSubmit() {
    this.Users.push({...this.user})
  }
}
