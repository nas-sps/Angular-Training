// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-date-display',
//   templateUrl: './date-display.component.html',
//   styleUrls: ['./date-display.component.css']
// })
// export class DateDisplayComponent {
//   name:string = "softprodigy"
//   click(){
//     alert('click me');
//   }

//   currentDate: Date = new Date();
// }

import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {
  isLoading: boolean = false;
  products: any[] = [];
  private searchText$ = new Subject<string>();

  constructor(private readonly productService: CallService ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      this.isLoading = false;
    });
    this.searchText$.pipe(
      debounceTime(1100),
      distinctUntilChanged(),
      switchMap((text: string) => {
        this.isLoading=true;
        return this.productService.getProducts(text)
      })
    ).subscribe(response=>{
      this.products = response.products;
      this.isLoading=false;
    })
  }

  searchProduct(text:string){
    this.searchText$.next(text);
  }
}
