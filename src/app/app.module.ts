import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AboutComponent } from './core/components/about/about.component';
import { HomeComponent } from './core/components/home/home.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { CustomerListComponent } from './features/customers/customer-list/customer-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ServiceRequestListComponent } from './features/service-requests/service-request-list/service-request-list.component';
import { ServiceTechnicianListComponent } from './features/service-technicians/service-technician-list/service-technician-list.component';
import { AddCustomerComponent } from './features/customers/add-customer/add-customer.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { AddServiceRequestComponent } from './features/service-requests/add-service-request/add-service-request.component';
import { AddServiceTechnicianComponent } from './features/service-technicians/add-service-technician/add-service-technician.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    CustomerListComponent,
    ProductListComponent,
    ServiceRequestListComponent,
    ServiceTechnicianListComponent,
    AddCustomerComponent,
    AddProductComponent,
    AddServiceRequestComponent,
    AddServiceTechnicianComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
