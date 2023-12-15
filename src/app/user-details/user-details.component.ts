import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USER_TYPE } from '../interfaces/user.interfaces';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  isLoading: boolean = false;
  userDetails: USER_TYPE = {} as USER_TYPE;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UsersService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      return;
    }
    this.userService
      .getUserDetailsById(+id)
      .subscribe((response: USER_TYPE) => {
        this.isLoading = false;
        this.userDetails = response;
      });
  }
}
