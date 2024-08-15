import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from '../servicios/restaurant.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,HttpClientModule],
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  restaurantForm: FormGroup;
  restaurantId: number = 0;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      capacity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.restaurantId = +id;
      this.restaurantService.getRestaurant(this.restaurantId).subscribe((data: any) => {
        this.restaurantForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.restaurantId) {
      this.restaurantService.updateRestaurant(this.restaurantId, this.restaurantForm.value).subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
    } else {
      this.restaurantService.createRestaurant(this.restaurantForm.value).subscribe(() => {
        this.router.navigate(['/restaurants']);
      });
    }
  }
}