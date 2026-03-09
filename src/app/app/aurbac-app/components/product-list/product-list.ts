import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { ProductService } from '../../../../product-service';
import { CommonModule } from '@angular/common';
import { Product } from './models/Product';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  

  private productService: ProductService = inject(ProductService);
  public products: Product[] = [];
  
  products$ = this.productService.getProducts();

}
