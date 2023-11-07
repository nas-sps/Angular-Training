import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateDisplayComponent } from './date-display/date-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DateDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
