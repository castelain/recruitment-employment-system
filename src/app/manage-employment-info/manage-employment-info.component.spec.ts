import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmploymentInfoComponent } from './manage-employment-info.component';

describe('ManageEmploymentInfoComponent', () => {
  let component: ManageEmploymentInfoComponent;
  let fixture: ComponentFixture<ManageEmploymentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmploymentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmploymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
