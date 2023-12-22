import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductsPipe} from './products/product.pipe';
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModuleModule } from './shared-module/shared-module.module'


@NgModule({
  declarations: [
    AppComponent,
    DateDisplayComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    FooterComponent,
    ProductsPipe,
    LoginComponent,
    HeaderComponent,
    UserDetailsComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
