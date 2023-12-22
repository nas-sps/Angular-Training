import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  filteredProducts: any[] = [];
  titleFilter: string = '';
  minPriceFilter: number = 1;
  maxPriceFilter: number = 100;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.queryParams.subscribe((params: Params) => {
      this.minPriceFilter = params['price_min'] ? +params['price_min'] : 1;
      this.maxPriceFilter = params['price_max'] ? +params['price_max'] : 50000;
      this.getFilteredProducts();
    });
  }

  getFilteredProducts(): void {

    this.isLoading = true;
    const queryParams = {
      title: this.titleFilter,
      price_min: this.minPriceFilter.toString(),
      price_max: this.maxPriceFilter.toString()
    };

    this.productService.getProductsForSale(queryParams)
      .subscribe((products: any[]) => {
        this.isLoading = false;
        this.filteredProducts = products;
      });
  }

  applyFilters(): void {
    const queryParams = {
      title: this.titleFilter,
      price_min: this.minPriceFilter.toString(),
      price_max: this.maxPriceFilter.toString()
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
