import { Component, inject } from '@angular/core';
import { ProductService } from '@services/product-service';
import { CommonModule } from '@angular/common';
import { Product } from '@models/Product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  

  private productService: ProductService = inject(ProductService);
  public products: Product[] = [];
  
  products$ = this.productService.getProducts();

}
