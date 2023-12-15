import { Component ,Input} from '@angular/core';
import { USER_TYPE } from 'src/app/interfaces/user.interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  @Input() users: any;
  // showContent: boolean = true;
  // items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  // status: string = 'active'; // You can change this value to test ngSwitch
  // someDynamicData: string = "Dynamic data here";
  constructor(private readonly userService: UsersService) {}

  allUsers: USER_TYPE[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe((response: USER_TYPE[]) => {
      this.isLoading = false;
      this.allUsers = response;
    });
  }
}
