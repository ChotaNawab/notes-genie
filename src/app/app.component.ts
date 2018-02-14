import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  data: any;
  constructor ( private service: MyserviceService){}
  ngOnInit() {
    this.service.getdata()
    .subscribe(
      res => this.data = res
    );
  }
}
