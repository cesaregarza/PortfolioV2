import { Injectable, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'jquery.nicescroll';
import 'lethargy';
import { Lethargy } from 'lethargy';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  whenCalled(){
    $('html').on("mousewheel", function(e){ e.preventDefault(); });
    $('body').niceScroll({
      cursorcolor: "#424242", // change cursor color in hex
      cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
      cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
      cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
      cursorborder: "1px solid #fff", // css definition for cursor border
      cursorborderradius: "5px", // border radius in pixel for cursor
      scrollspeed: 60, // scrolling speed
      mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
      touchbehavior: false, // DEPRECATED!! use "emulatetouch"
      emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
      hwacceleration: true, // use hardware accelerated scroll when supported
      boxzoom: false, // enable zoom for box content
      dblclickzoom: false, // (only when boxzoom=true) zoom activated when double click on box
      gesturezoom: false, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
      grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
      autohidemode: "scroll", // how hide the scrollbar works, possible values
      background: "", // change css for rail background
      iframeautoresize: true, // autoresize iframe on load event
      cursorminheight: 32, // set the minimum cursor height (pixel)
      preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
      railoffset: false, // you can add offset top/left for rail position
      bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
      spacebarenabled: true, // enable page down scrolling when space bar has pressed
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
      disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
      horizrailenabled: true, // nicescroll can manage horizontal scroll
      railalign: "right", // alignment of vertical rail
      railvalign: "bottom", // alignment of horizontal rail
      enabletranslate3d: true, // nicescroll can use css translate to scroll content
      enablemousewheel: true, // nicescroll can manage mouse wheel events
      enablekeyboard: true, // nicescroll can manage keyboard events
      smoothscroll: true, // scroll with ease movement
      sensitiverail: true, // click on rail make a scroll
      enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
      hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
      directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
      nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
      enablescrollonselection: true, // enable auto-scrolling of content when selection text
      cursordragspeed: 0.3, // speed of selection when dragged with cursor
      rtlmode: "auto", // horizontal div scrolling starts at left side
      cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
      oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
      preventmultitouchscrolling: true, // prevent scrolling on multitouch events
      disablemutationobserver: false, // force MutationObserver disabled,
      enableobserver: true // enable DOM changing observer, it tries to resize/hide/show when parent or content div had changed
    });
  }
  
  throttle = 50;
  scrollDistance = 0.25;
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
  winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 1.1;
  lethargy = new Lethargy();


  constructor(private router: Router) {
    this.router = router;
   }

   onScrollDown(ev) {
     console.log(`scrolled down!`);
     let nxt = (this.currentpage.id % this.maxpages);
     let next = this.pages[nxt];
     $('html').on("mousewheel", function(e){ e.preventDefault(); });
     if (this.lethargy.check("mousewheel") != false){
       $("body").getNiceScroll().doScrollPos(0, this.winHeight / 2, 999999);
     }
     this.router.navigate([next.page])
     this.currentpage = this.pages[nxt];
     this.direction = "down";
   }

   onScrollUp(ev) {
     console.log(`scrolled up!`);
     let prv = ((this.currentpage.id + this.maxpages - 2) % this.maxpages);
     let prev = this.pages[prv];
     $('html').on("mousewheel", function(e){ e.preventDefault(); });
     $('body').css("overflow", "hidden");
     $("body").getNiceScroll().doScrollPos(0, this.winHeight / 2, 999999);
     this.router.navigate([prev.page]);
     this.currentpage = this.pages[prv];
     this.direction = "up";
   }
}
