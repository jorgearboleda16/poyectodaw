import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReservacionesComponent implements OnInit {
  reservationForm: FormGroup;
  guestsOptions: number[] = [1, 2, 3, 4, 5, 6];
  timeOptions: string[] = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      selectedDate: ['', Validators.required],
      selectedGuests: ['', Validators.required],
      selectedTime: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  selectTime(time: string): void {
    const selectedTimeControl = this.reservationForm.get('selectedTime');
    if (selectedTimeControl) {
      selectedTimeControl.setValue(time);
    }
  }
}
