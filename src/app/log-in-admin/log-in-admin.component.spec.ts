import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInAdminComponent } from './log-in-admin.component';

describe('LogInAdminComponent', () => {
  let component: LogInAdminComponent;
  let fixture: ComponentFixture<LogInAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
