import { Component } from '@angular/core';
import { CallService } from './services/call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  constructor(private service: CallService) {}
}
