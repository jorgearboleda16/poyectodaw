import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../servicios/customer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  customerId: number = 0;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.customerId = +id;
      this.customerService.getCustomer(this.customerId).subscribe((data: any) => {
        this.customerForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.customerId) {
      this.customerService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
        this.router.navigate(['/customers']);
      });
    } else {
      this.customerService.createCustomer(this.customerForm.value).subscribe(() => {
        this.router.navigate(['/customers']);
      });
    }
  }
}