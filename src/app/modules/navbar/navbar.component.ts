import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // routingList = ['home','service']
  val
  href
  eventS
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.eventS
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              this.href = event.url
            }
          });
  }

  ngOnInit() {
  }

  showMenu() {
    this.val = "0"
  }
  hideMenu() {
    this.val = "-200px"
  }

  active(val) {
    console.log(val)
  }

}
