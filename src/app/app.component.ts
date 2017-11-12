import {Component, HostListener, ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('content') content;
  setColor = false;
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
  constructor(private router: Router){

  }

  onScrollEvent($event) {
    console.log($event);
    this.setColor = this.content.nativeElement.getBoundingClientRect().top < 14;
  }
}
