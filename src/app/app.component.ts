import {Component, HostListener, ViewChild, Renderer2} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    // console.log(this.content);
    let scrollTopPosition=$event.target.scrollTop;
    let scrollHeight=$event.target.scrollHeight;
    let windowBottomPosition = (scrollTopPosition + scrollHeight);
    Object.keys(this.main.nativeElement.children).forEach(item => {
      let currentSection=this.main.nativeElement.children[item];
      let sectionTopPosition = (currentSection.offsetTop);
      let sectionHeight = (currentSection.getBoundingClientRect().height);
      let sectionBottomPosition = (sectionTopPosition+sectionHeight);
      console.log('itemid:'+currentSection.id+': sectionBottomPosition:'+sectionTopPosition+'sectionHeight'+sectionHeight+' >= scrollTop:'+scrollTopPosition);
      console.log('itemid:'+currentSection.id+': sectionTopPosition:'+sectionTopPosition+' <= windowBottomPosition:'+windowBottomPosition);
      // console.log('itemid:'+currentSection.id+' / itemtop:'+sectionTopPosition+' / itemh:'+currentSection.getBoundingClientRect().height+' / itembottom:'+currentSection.getBoundingClientRect().bottom)
      // if(item.getBoundingClientRect().top)
      // console.log(this.main.nativeElement.children[item].getBoundingClientRect().top);
      if ((sectionBottomPosition >= scrollTopPosition) && (sectionTopPosition <= windowBottomPosition)) {
        this.renderer.addClass(currentSection, 'slidein');
      } else {
        this.renderer.removeClass(currentSection, 'slidein');
        // currentSection.setElementClass(item, "slidein", false);
      }
    });
    this.toolbarScroll = this.content.nativeElement.getBoundingClientRect().top < 18;


  }
}
