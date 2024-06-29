import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-contact-us',
  templateUrl: './t-contact-us.component.html',
  styleUrls: ['./t-contact-us.component.scss']
})
export class TContactUsComponent implements OnInit {
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
