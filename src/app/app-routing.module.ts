import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { HomeComponent } from './core/components/home/home.component';
import { CustomerListComponent } from './features/customers/customer-list/customer-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ServiceRequestListComponent } from './features/service-requests/service-request-list/service-request-list.component';
import { ServiceTechnicianListComponent } from './features/service-technicians/service-technician-list/service-technician-list.component';
import { AddCustomerComponent } from './features/customers/add-customer/add-customer.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { AddServiceRequestComponent } from './features/service-requests/add-service-request/add-service-request.component';
import { AddServiceTechnicianComponent } from './features/service-technicians/add-service-technician/add-service-technician.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'app-customer-list', component: CustomerListComponent },
  { path: 'app-add-customer', component: AddCustomerComponent },
  { path: 'app-product-list', component: ProductListComponent },
  { path: 'app-add-product', component: AddProductComponent },
  { path: 'app-service-request-list', component: ServiceRequestListComponent },
  { path: 'app-add-service-request', component: AddServiceRequestComponent },
  {
    path: 'app-service-technician-list',
    component: ServiceTechnicianListComponent,
  },
  {
    path: 'app-add-service-technician',
    component: AddServiceTechnicianComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
