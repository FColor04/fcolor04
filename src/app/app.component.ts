import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static docTitle : Title;
  static title = 'FColor04 | ';
  
  static setTitle (newTitle: string) {
    AppComponent.docTitle.setTitle(AppComponent.title + newTitle);
  }
  
  constructor(private titleService: Title) {
    AppComponent.docTitle = titleService;
  }
}
