import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-course',
  templateUrl: './t-course.component.html',
  styleUrls: ['./t-course.component.scss']
})
export class TCourseComponent implements OnInit {
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
