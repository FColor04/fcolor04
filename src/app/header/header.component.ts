import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tl = gsap.timeline({ paused: true });
  scrollToggle = false;
  faBars = faBars;
  HC = HeaderComponent;
  static hamburger = false;

  static toggleHamburger = (state ?: boolean) => {
    HeaderComponent.hamburger = !HeaderComponent.hamburger;
    if(state != null)
      HeaderComponent.hamburger = state;
  }

  initNavAnimation = () => {
    const list = document.querySelector(".nav-list");
    const name = document.querySelector("#name");
    this.tl.fromTo(list, { width: "34ch" }, { width: "10ch", duration: "0.1" }, "<")
    .fromTo(name, { opacity: 1 }, { opacity: 0, duration: "0.3" }, "<");
  }

  setScroll = () => {
    const oldScrollToggle = this.scrollToggle;
    this.scrollToggle = (window.scrollY > 0);
    if(this.scrollToggle != oldScrollToggle){
      if(this.scrollToggle){
        this.tl.play();
        return;
      }
      this.tl.reverse();
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

};