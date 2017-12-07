import {Component, HostListener, ViewChild, Renderer2} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { ScrollEvent } from 'ngx-scroll-event';

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

  onScrollEvent($event) {
    // console.log("top:"+this.content.nativeElement.getBoundingClientRect().top+" / bottom:"+
    // this.content.nativeElement.getBoundingClientRect().bottom);
    //  console.log($event);
    let scrollTopPosition=$event.target.scrollTop;
    let scrollPos =$event.target.scrollY;
    let scrollHeight=$event.target.scrollHeight;
    let windowBottomPosition = (scrollTopPosition + scrollHeight);
    // console.log("ST="+$event.target.scrollTop);
    Object.keys(this.main.nativeElement.children).forEach(item => {
      let currentSection=this.main.nativeElement.children[item];
      // console.log('scrolltop:'+currentSection.scrollTop);
      let sectionTopPosition = (currentSection.offsetTop);
      let sectionHeight = (currentSection.getBoundingClientRect().height);
      let sectionBottomPosition = (sectionTopPosition+sectionHeight);
      console.log('itemid:'+currentSection.id+' > sectionTopPosition:'+sectionTopPosition+' to sectionBottomPosition:'+sectionBottomPosition+' >= scrollTop:'+scrollTopPosition+"/scrollHeight:"+scrollHeight);
      // console.log('itemid:'+currentSection.id+': sectionTopPosition:'+sectionTopPosition+' <= windowBottomPosition:'+windowBottomPosition);
      // console.log('itemid:'+currentSection.id+' / itemtop:'+sectionTopPosition+' / itemh:'+currentSection.getBoundingClientRect().height+' / itembottom:'+currentSection.getBoundingClientRect().bottom)
      // if(item.getBoundingClientRect().top)
      // console.log(this.main.nativeElement.children[item].getBoundingClientRect().top);
      if ((scrollTopPosition >= sectionTopPosition) && (scrollTopPosition <= sectionBottomPosition)) {
      // if (scrollPos >= sectionTopPosition || (scrollPos + window.innerHeight) >= (sectionTopPosition + sectionHeight)) {
        this.renderer.addClass(currentSection, 'slidein');
      } else {
        this.renderer.removeClass(currentSection, 'slidein');
      }
        // currentSection.setElementClass(item, "slidein", false);
    });
    this.toolbarScroll = this.content.nativeElement.getBoundingClientRect().top < 18;


  }

  public handleScroll(event: ScrollEvent) {
    console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      console.log(`the user is reaching the bottom`);
    }
    if (event.isWindowEvent) {
      console.log(`This event is fired on Window not on an element.`);
    }

  }

  enter() {
    console.log('Track scroll enter is working!');
  }

  leave() {
    console.log('Track scroll leave is working too!');
  }
}
