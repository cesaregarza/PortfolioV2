import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  throttle = 50;
  scrollDistance = 0.5;
  scrollUpDistance = 1;
  direction = '';
  pages = [
    { id: 1, page: "/"},
    { id: 2, page: "/about"},
    { id: 3, page: "/portfolio"},
    { id: 4, page: "/skills"},
    { id: 5, page: "/hobbies"},
    { id: 6, page: "/contact"}
  ];
  currentpage = this.pages[0];
  maxpages = this.pages.length;
  winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 2.5;


  constructor(private router: Router) {
    this.router = router;
   }

   onScrollDown(ev) {
     console.log(`scrolled down!`);
     let nxt = (this.currentpage.id % this.maxpages);
     let next = this.pages[nxt];
     window.scrollBy(0,-this.winHeight);
     this.router.navigate([next.page])
     this.currentpage = this.pages[nxt];
     this.direction = "down";
   }

   onScrollUp(ev) {
     console.log(`scrolled up!`);
     let prv = ((this.currentpage.id + this.maxpages - 2) % this.maxpages);
     let prev = this.pages[prv];
     console.log(prev);
     window.scrollBy(0,this.winHeight);
     this.router.navigate([prev.page]);
     this.currentpage = this.pages[prv];
     this.direction = "up";
   }
}
