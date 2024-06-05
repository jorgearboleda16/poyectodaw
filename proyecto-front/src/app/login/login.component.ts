import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = 'admin';
  password: string = 'admin';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(response => {
      // Manejar la respuesta del backend
      if (response.success) {
        this.router.navigate(['/']);
      } else {
        // Mostrar mensaje de error
        alert('Login failed');
      }
    });
  }
}
