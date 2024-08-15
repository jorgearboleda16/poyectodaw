import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../servicios/customer.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  editCustomer(id: number): void {
    this.router.navigate(['/customers/edit', id]);
  }
}