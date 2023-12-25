import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceTechnicianComponent } from './add-service-technician.component';

describe('AddServiceTechnicianComponent', () => {
  let component: AddServiceTechnicianComponent;
  let fixture: ComponentFixture<AddServiceTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceTechnicianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
