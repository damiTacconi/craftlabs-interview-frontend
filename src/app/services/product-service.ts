import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@models/Product';
import { environment } from '@env/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private apiUrl: string = environment.apiUrl;
  private httpClient: HttpClient = inject(HttpClient);  
  
  public getProducts(): Observable<Product[]> {
    console.log('Fetching products from API...');
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  }
}
