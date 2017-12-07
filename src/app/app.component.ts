import {Component, HostListener, ViewChild, Renderer2} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // ,
  // template: `
  //   ...
  //   <h1 trackScroll
  //       (trackScrollEnter)="enter()"
  //       (trackScrollLeave)="leave()">Component Title</h1>
  //   <!-- Further content here -->
  //   ...
  // `
})
export class AppComponent {
  @ViewChild('content') content;
  @ViewChild('main') main;
  toolbarScroll = false;
  carouselBanner=null;
  year = new Date().getFullYear();
  title = 'Angular demo App by VinZ!!';
  isDarkTheme = true;
  // logo = require('../assets/logo.png');
  navigation = [
    { link: 'about', label: 'About' },
    { link: 'features', label: 'Features' },
    { link: 'examples', label: 'Examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  constructor(private router: Router, private renderer : Renderer2){


  }

  ngOnInit(){
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: false,
      touch: true
    }
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
  }

  onScrollEvent($event) {
    // console.log("top:"+this.content.nativeElement.getBoundingClientRect().top+" / bottom:"+
    // this.content.nativeElement.getBoundingClientRect().bottom);
    //  console.log($event);
    let scrollTopPosition=$event.target.scrollTop;
    let scrollPos =$event.target.scrollY;
    let scrollHeight=window.innerHeight;
    let windowBottomPosition = (scrollTopPosition + scrollHeight);
    // console.log("ST="+$event.target.scrollTop);
    Object.keys(this.main.nativeElement.children).forEach(item => {
      let currentSection=this.main.nativeElement.children[item];
      // console.log('scrolltop:'+currentSection.scrollTop);
      let sectionTopPosition = (currentSection.offsetTop);
      let sectionHeight = (currentSection.getBoundingClientRect().height);
      let sectionBottomPosition = (sectionTopPosition+sectionHeight);
      // console.log('itemid:'+currentSection.id+' > sectionTopPosition:'+sectionTopPosition+' to sectionBottomPosition:'+sectionBottomPosition+' >= scrollTop:'+scrollTopPosition+"/windowBottomPosition:"+windowBottomPosition);
      // console.log('itemid:'+currentSection.id+': sectionTopPosition:'+sectionTopPosition+' <= windowBottomPosition:'+windowBottomPosition);
      // console.log('itemid:'+currentSection.id+' / itemtop:'+sectionTopPosition+' / itemh:'+currentSection.getBoundingClientRect().height+' / itembottom:'+currentSection.getBoundingClientRect().bottom)
      // if(item.getBoundingClientRect().top)
      // console.log(this.main.nativeElement.children[item].getBoundingClientRect().top);
      // if ((scrollTopPosition >= sectionTopPosition) && (scrollTopPosition <= sectionBottomPosition)) {
        if ((sectionBottomPosition >= scrollTopPosition) && (sectionTopPosition+50 <= windowBottomPosition)) {
      // if (scrollPos >= sectionTopPosition || (scrollPos + window.innerHeight) >= (sectionTopPosition + sectionHeight)) {
          this.renderer.addClass(currentSection, 'show');
          this.renderer.addClass(currentSection.querySelector('.box-background'), 'slidein');
          // console.log('itemid:'+currentSection.id+' > slidein');
          // console.log('itemid:'+currentSection.id+' > sectionBottomPosition:'+sectionBottomPosition+'> scrollTopPosition:'+scrollTopPosition+' && sectionTopPosition:'+sectionTopPosition+"("+currentSection.getBoundingClientRect().top+")<windowBottomPosition:"+windowBottomPosition);
      } else {
        this.renderer.removeClass(currentSection.querySelector('.box-background'), 'slidein');
          // console.log('itemid:'+currentSection.id+' > slideout');
      }
        // currentSection.setElementClass(item, "slidein", false);
    });
    this.toolbarScroll = this.content.nativeElement.getBoundingClientRect().top < 18;


  }

  // public handleScroll(event: ScrollEvent) {
  //   console.log('scroll occurred', event.originalEvent);
  //   if (event.isReachingBottom) {
  //     console.log(`the user is reaching the bottom`);
  //   }
  //   if (event.isWindowEvent) {
  //     console.log(`This event is fired on Window not on an element.`);
  //   }
  //
  // }
  //
  // enter() {
  //   console.log('Track scroll enter is working!');
  // }
  //
  // leave() {
  //   console.log('Track scroll leave is working too!');
  // }
}
