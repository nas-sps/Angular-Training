import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  searchByEmail:string = ''
  responseData: any;
  
  name: string = 'Amit';
  datas: string[] = []
  constructor(private service: SubscribeService ,private productService: ProductService) { }
  subs() {
    this.service.callme(this.name)
  }
  getd() {
    this.datas = this.service.data();
  } 
  ngOnInit() {
    this.productService.fetchData().subscribe(
        (data) => {
          this.responseData = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
