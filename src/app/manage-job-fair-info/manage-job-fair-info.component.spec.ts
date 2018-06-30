import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobFairInfoComponent } from './manage-job-fair-info.component';

describe('ManageJobFairInfoComponent', () => {
  let component: ManageJobFairInfoComponent;
  let fixture: ComponentFixture<ManageJobFairInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobFairInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobFairInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
