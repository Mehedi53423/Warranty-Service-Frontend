import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  newCustomer: any = {};

  constructor(private customerService: CustomersService, private router: Router) {}

  ngOnInit(): void {
    this.newCustomer();
  }

  addCustomer(): void {
    this.customerService.addCustomer(this.newCustomer).subscribe((response) => {
      this.customerService.addCustomer(response);
      this.clearForm();
      this.router.navigate(['app-customer-list']);
    });
  }

  clearForm(): void {
    this.newCustomer = {};
  }
}
