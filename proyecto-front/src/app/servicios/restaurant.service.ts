import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:5001/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createRestaurant(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateRestaurant(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getRestaurant(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}