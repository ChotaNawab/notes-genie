import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcdetailsComponent } from './mpcdetails.component';

describe('MpcdetailsComponent', () => {
  let component: MpcdetailsComponent;
  let fixture: ComponentFixture<MpcdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpcdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
