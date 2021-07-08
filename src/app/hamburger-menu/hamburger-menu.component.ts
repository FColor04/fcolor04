import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})  
export class HamburgerMenuComponent implements OnInit {
  faTimes=faTimes;
  @Input() cb: any = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
