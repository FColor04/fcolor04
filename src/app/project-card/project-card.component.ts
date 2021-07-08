import { Component, Input, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() mirrored = false;
  @Input() title = "";
  @Input() img?: string | null = "";
  @Input() source?: string | null;
  @Input() view?: string | null;
  @Input() description?: string | null;
  mirrorStyle = `float: ${this.mirrored ? "right" : "left"};`;
  faEye = faEye;
  faGitAlt = faGitAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
