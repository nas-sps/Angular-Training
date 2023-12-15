import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallService } from '../services/call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myCred!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private call: CallService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myCred = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onsubmit() {
    let data = this.myCred.value;

    this.call.login(data).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    });
  }
}

