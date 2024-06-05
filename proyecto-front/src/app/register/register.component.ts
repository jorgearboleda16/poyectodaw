import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.email, this.password).subscribe(response => {
      // Manejar la respuesta del backend
      if (response.success) {
        this.router.navigate(['/login']);
      } else {
        // Mostrar mensaje de error
        alert('Registration failed');
      }
    });
  }
}
