import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { MenuComponent } from './menu/menu.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para Home
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'restaurants', component: RestaurantListComponent }, // Ruta para listado de restaurantes
  { path: 'restaurants/new', component: RestaurantFormComponent }, // Ruta para crear un nuevo restaurante
  { path: 'restaurants/edit/:id', component: RestaurantFormComponent }, // Ruta para editar un restaurante
  { path: 'customers', component: CustomerListComponent }, // Ruta para listado de clientes
  { path: 'customers/new', component: CustomerFormComponent }, // Ruta para crear un nuevo cliente
  { path: 'customers/edit/:id', component: CustomerFormComponent }, // Ruta para editar un cliente
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige cualquier ruta no definida a la página de inicio
];