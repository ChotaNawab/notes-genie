import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcdetailComponent } from './fcdetail.component';

describe('FcdetailComponent', () => {
  let component: FcdetailComponent;
  let fixture: ComponentFixture<FcdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
