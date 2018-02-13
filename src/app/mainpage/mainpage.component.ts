import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slick-main').slick({
      slidesToShow: 4,
      infinite: false,
    });
  }

}
