import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { UserComponentComponent } from './user/user-component/user-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dateDisplay',
    component: DateDisplayComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path:"user",
    component: UserComponentComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
