import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  showContent: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  status: string = 'active'; // You can change this value to test ngSwitch
  someDynamicData: string = "Dynamic data here";
}
