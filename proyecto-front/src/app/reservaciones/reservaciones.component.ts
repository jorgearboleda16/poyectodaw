import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] // Asegúrate de incluir HttpClientModule
})
export class ReservacionesComponent implements OnInit {
  reservationForm: FormGroup;
  guestsOptions: number[] = [1, 2, 3, 4, 5, 6];
  timeOptions: string[] = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reservationForm = this.fb.group({
      selectedDate: ['', Validators.required],
      selectedGuests: ['', Validators.required],
      selectedTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  selectTime(time: string): void {
    const selectedTimeControl = this.reservationForm.get('selectedTime');
    if (selectedTimeControl) {
      selectedTimeControl.setValue(time);
    }
  }

  submitReservation(): void {
    if (this.reservationForm.valid) {
      this.http.post('http://localhost:5001/api/reservations', this.reservationForm.value)
        .subscribe(response => {
          console.log('Reservation successful', response);
          // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario
        }, error => {
          console.error('Reservation failed', error);
        });
    }
  }
}