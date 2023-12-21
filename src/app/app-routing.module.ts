import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { UserComponentComponent } from './user/user-component/user-component.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RoleGuard } from './auth/role.guard';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path: 'home',
    //canActivate: [authGuard],
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
    canActivate: [RoleGuard]
  },
  { path: 'login', 
    component: LoginComponent 
  },
  { path: '', 
    pathMatch: 'full', 
    redirectTo: 'login' 
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'usersList',
    component: UsersListComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
