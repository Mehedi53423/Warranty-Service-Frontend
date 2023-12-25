import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: any[] = [];

  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList(): void {
    this.customerService.getList().subscribe(data => {
      this.customerList = data;
    });
  }
}
