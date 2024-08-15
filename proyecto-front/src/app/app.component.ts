import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    RegisterComponent,
    ReservacionesComponent,
    NavbarComponent,
    FooterComponent,
    RestaurantFormComponent,
    RestaurantListComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteAngular';
}