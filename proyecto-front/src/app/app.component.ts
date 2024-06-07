import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ConocenosComponent,HomeComponent,LoginComponent,MenuComponent,RegisterComponent,ReservacionesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-front';
}
