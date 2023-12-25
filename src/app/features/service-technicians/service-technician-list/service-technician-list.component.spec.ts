import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTechnicianListComponent } from './service-technician-list.component';

describe('ServiceTechnicianListComponent', () => {
  let component: ServiceTechnicianListComponent;
  let fixture: ComponentFixture<ServiceTechnicianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTechnicianListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTechnicianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
