
import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  isShown =  false;
  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit() {
  }

  @HostListener('window:scroll') onWindowScroll() {
    const currentHeight = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = currentHeight > 200;
  }

  gotoTop() {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }

}
