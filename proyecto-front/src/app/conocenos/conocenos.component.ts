import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, RouterModule,AppComponent],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {
  conocenos = [
    {
      nombre: 'Jorge Arboleda',
      telefono: '555-1234',
      email: 'jorgea@example.com',
      direccion: 'Calle 123, Guayaquil, Ecuador',
      imagen: 'assets/images/Jorge.jpg'
    },
    {
      nombre: 'Christian Zeas',
      telefono: '555-5678',
      email: 'christianz@example.com',
      direccion: 'Avenida 456, Guayaquil, Ecuador',
      imagen: 'assets/images/Christian.jpg'
    },
    {
      nombre: 'Daniel Gancino',
      telefono: '555-9012',
      email: 'danielg@example.com',
      direccion: 'Calle 789, Guayaquil, Ecuador',
      imagen: 'assets/images/Daniel.jpg'
    }
  ];

  mision = 'Superar las expectativas de nuestros clientes de forma tal que nuestro nombre sea conocido como una experiencia memorable.';
  vision = 'Ser reconocidos entre los mejores restaurantes a nivel local y nacional por nuestra oferta gastronómica, ambiente y atención.';
}

