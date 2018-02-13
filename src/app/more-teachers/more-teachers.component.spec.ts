import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTeachersComponent } from './more-teachers.component';

describe('MoreTeachersComponent', () => {
  let component: MoreTeachersComponent;
  let fixture: ComponentFixture<MoreTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
