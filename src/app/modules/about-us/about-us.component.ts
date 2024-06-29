import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    smartSpeed: 100,
    dots: false,
    // navSpeed: 200,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const suc = document.getElementById("suc");
    const exper = document.getElementById("exper");
    const trust = document.getElementById("trust");
    const horos = document.getElementById("horos");
    const quali = document.getElementById("quali");
    this.animateValue(quali, 100, 19, 5000);
    this.animateValue(horos, 100, 13, 5000);
    this.animateValue(trust, 100, 150, 5000);
    this.animateValue(exper, 100, 25, 5000);
    this.animateValue(suc, 100, 99.8, 5000);
  }
  animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
