import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { FormsModule } from '@angular/forms';
import { SalesRoutingModule } from './shared-module-routing.module';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule
  ],
  exports: [
    SalesComponent
  ],
})
export class SharedModuleModule { }
