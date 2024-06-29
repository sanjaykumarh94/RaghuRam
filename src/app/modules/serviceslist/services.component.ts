import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { WINDOW } from '@ng-toolkit/universal';

class details {
  title: string;
  subTitle: string;

  // constructor(@Inject(WINDOW) private window: Window) { }
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ind = 0
  title: string;
  subTitle: string;
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // this.route
    //   .queryParams
    //   .subscribe(params => {
    //     this.ind = params.SR ? params.SR : "exLove"
    //     let val = params.SR ? params.SR : "exLove"
    //     scroll(val)
    //   })
  }

  service(i) {
    if (i == 0) {
      this.ind = i
      this.title = "Get Back Love Astrologer"
      this.subTitle = "Get Back Love Astrologer"
    } else if (i == 1) {
      this.ind = i
      this.title = "Love Marriage Astrologer"
      this.subTitle = "Love Marriage"
    } else if (i == 2) {
      this.ind = i
      this.title = "Husband and Wife Disputes"
      this.subTitle = "Husband and Wife Disputes"
    } else if (i == 3) {
      this.ind = i
      this.title = "Family Problems Astrologer"
      this.subTitle = "Family Problems "
    } else if (i == 4) {
      this.ind = i
      this.title = "Job and Business Problems"
      this.subTitle = "Job and Business Problems"
    } else if (i == 5) {
      this.ind = i
      this.title = "Health problems Astrologer"
      this.subTitle = "Health problems Astrologer"
    } else if (i == 6) {
      this.ind = i
      this.title = "Childless Couple Astrologer"
      this.subTitle = "Childless Couple Astrologer"
    } else if (i == 7) {
      this.ind = i
      this.title = "Career Problems Astrologer"
      this.subTitle = "Career Problems Astrologer"
    } else if (i == 8) {
      this.ind = i
      this.title = "Financial Problems Astrologer"
      this.subTitle = "Financial Problems Astrologer"
    } else if (i == 9) {
      this.ind = i
      this.title = "Education Problems Astrologer"
      this.subTitle = "Education Problems Astrologer"
    } else if (i == 10) {
      this.ind = i
      this.title = "Enemy Problems Astrologer"
      this.subTitle = "Enemy Problems Astrologer"
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  myFunction(dot, more, btn) {
    console.log(dot, more, btn)
    var dots = document.getElementById(dot);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(btn);
    console.log(dots, moreText, btnText)
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
}
