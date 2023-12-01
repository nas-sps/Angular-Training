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
import {ProductsPipe} from './products/product.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DateDisplayComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    FooterComponent,
    ProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
