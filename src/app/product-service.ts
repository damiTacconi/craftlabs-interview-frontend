import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './app/aurbac-app/components/product-list/models/Product';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl: string = environment.apiUrl;
  private httpClient: HttpClient = inject(HttpClient);  
  
  public getProducts(): Observable<Product[]> {
    console.log('Fetching products from API...');
    return this.httpClient
      .get<Product[] | { $values?: Product[] }>(`${this.apiUrl}/products`)
      .pipe(
        map((response) => (Array.isArray(response) ? response : response?.$values ?? []))
      );
  }
}
