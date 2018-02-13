import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecameTutorComponent } from './became-tutor.component';

describe('BecameTutorComponent', () => {
  let component: BecameTutorComponent;
  let fixture: ComponentFixture<BecameTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecameTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecameTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
