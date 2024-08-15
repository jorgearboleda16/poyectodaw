import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../servicios/restaurant.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }

  editRestaurant(id: number): void {
    this.router.navigate(['/restaurants/edit', id]);
  }
}