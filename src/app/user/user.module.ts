import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserPipePipe } from './user-pipe.pipe';



@NgModule({
  declarations: [
    UserComponentComponent,
    UserPipePipe
  ],
  exports: [UserComponentComponent], // Export UserComponent
  imports: [
    CommonModule
  ]
})
export class UserModule { }
