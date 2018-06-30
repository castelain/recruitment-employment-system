import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnFormComponent } from './return-form.component';

describe('ReturnFormComponent', () => {
  let component: ReturnFormComponent;
  let fixture: ComponentFixture<ReturnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
