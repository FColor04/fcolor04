import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tl = gsap.timeline();
  scrollToggle = false;

  initNavAnimation = () => {
    const list = document.querySelector("nav > ul");
    this.tl.fromTo(list, { width: "30ch" }, { width: "10ch", duration: "2" });
    // const listItems = document.querySelectorAll('nav > ul > li');
    // listItems.forEach(item => {
    //   this.tl.fromTo(item, {  })
    // });
  }

  setScroll = () => {
    const oldScrollToggle = this.scrollToggle;
    this.scrollToggle = (window.scrollY > 0);
    if(this.scrollToggle != oldScrollToggle){
      if(this.scrollToggle){
        
      }
    }
  }

  debounce = (fn : any) => {
      let frame: any;
      return (...params: any) => {
        if (frame) { 
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      } 
    };

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', this.debounce(this.setScroll), { passive: true });
    this.initNavAnimation();
    this.setScroll();
  }

}
