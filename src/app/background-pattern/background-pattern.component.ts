import { Component, OnInit } from '@angular/core';
import 'css-doodle';

@Component({
  selector: 'app-background-pattern',
  templateUrl: './background-pattern.component.html',
  styleUrls: ['./background-pattern.component.scss']
})
export class BackgroundPatternComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
    const doodle : any = document.querySelector("css-doodle");
  }

}
