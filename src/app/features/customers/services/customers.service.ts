import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private getAllApiUrl = 'https://localhost:44384/api/Customers/GetAll';
  private createApiUrl = 'https://localhost:44384/api/Customers/Create';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllApiUrl);
  }

  addCustomer(newCustomer: any): Observable<any> {
    return this.http.post<any>(this.createApiUrl, newCustomer);
  }
}
