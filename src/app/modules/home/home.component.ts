import { Component, ElementRef, HostListener, OnInit, ViewChild, Inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  arr = [
    {
      src: '../../../assets/img/pic1.jpg',
      title: 'Blackmagic Removal'
    },
    {
      src: '../../../assets/img/pic2.jpg',
      title: 'Love Problems'
    },
    {
      src: '../../../assets/img/pic3.jpg',
      title: 'Health Problems'
    },
    {
      src: '../../../assets/img/pic4.jpg',
      title: 'Horoscope'
    },
    {
      src: '../../../assets/img/pic5.jpg',
      title: 'Palm Reading'
    },
    {
      src: '../../../assets/img/pic6.jpg',
      title: 'Relationship Disputes'
    }];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptionspl: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    smartSpeed: 100,
    dots: false,
    navSpeed: 200,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  items = [
    '../../../assets/img/australia.webp',
    '../../../assets/img/London_Montage_L.jpg',
    '../../../assets/img/usa-trip.jpg',
    '../../../assets/img/boston.jpg',
    '../../../assets/img/california.jpg',
    '../../../assets/img/los angeles.jpg',
    '../../../assets/img/malaysia.jpg',
    '../../../assets/img/new jersey.jpg',
    '../../../assets/img/paris.jpg',
    '../../../assets/img/new-york.webp',
  ]

  containerWidth: number;
  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;
  // @HostListener("window:resize") windowResize() {
  //   let newCardsPerPage = this.getCardsPerPage();
  //   if (newCardsPerPage != this.cardsPerPage) {
  //     this.cardsPerPage = newCardsPerPage;
  //     this.initializeSlider();
  //     if (this.currentPage > this.totalPages) {
  //       this.currentPage = this.totalPages;
  //       this.populatePagePosition();
  //     }
  //   }
  // }


  // constructor(@Inject(WINDOW) private window: Window, config: NgbCarouselConfig) {
  //   // 
  //   config.interval = 2000;
  //   config.keyboard = true;
  //   config.pauseOnHover = true;
  // }

  ngOnInit() {
    // this.cardsPerPage = this.getCardsPerPage();
    // this.initializeSlider();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

}
