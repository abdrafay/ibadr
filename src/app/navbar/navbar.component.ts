import { Component, OnInit, ElementRef, ViewChild,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @ViewChild("search") srcBtn: any;
  vc(src: HTMLElement) {
    src.classList.toggle('srcActive');
  }
  constructor(private elementRef: ElementRef) {


  }


  ngOnInit(): void {
    console.log(this.srcBtn);
  }

}
