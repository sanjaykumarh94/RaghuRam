import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-about',
  templateUrl: './t-about.component.html',
  styleUrls: ['./t-about.component.scss']
})
export class TAboutComponent implements OnInit {
  val;
  count = 200;
  duration = 5000;
  constructor() { }

  ngOnInit() {
    const obj = document.getElementById("value");
  this.animateValue(obj, 100, 0, 5000);
  }

  showMenu() {
    this.val = "0"
  }
  hideMenu() {
    this.val = "-200px"
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
