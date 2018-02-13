import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-fcdetail',
  templateUrl: './fcdetail.component.html',
  styleUrls: ['./fcdetail.component.scss'],

})
export class FcdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.fc-slider').slick({
      slidesToShow: 3,
      infinite:false

    });
  }

}
