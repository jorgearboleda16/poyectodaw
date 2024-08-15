import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:5001/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createCustomer(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateCustomer(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}