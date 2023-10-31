import { Component } from '@angular/core';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent {
  name:string = "softprodigy"
  click(){
    alert('click me');
  }

  currentDate: Date = new Date();
}
