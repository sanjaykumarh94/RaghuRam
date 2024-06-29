import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-t-home',
  templateUrl: './t-home.component.html',
  styleUrls: ['./t-home.component.scss']
})
export class THomeComponent implements OnInit {
  // navLinks = document.getElementById("navLinks")
  @ViewChild('navLinks', { static: false }) navLinks: ElementRef;
  val
  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.val = "0"
  }
  hideMenu() {
    this.val = "-200px"
  }

}
