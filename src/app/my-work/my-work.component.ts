import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from "../app.component";

import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      source
      description {
        html
      }
      view
      image {
        url
      }
    }
  }
`;

interface project {
  title: string;
  image: any;
  description: any;
  source: string;
  view: string;
}
@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})

export class MyWorkComponent implements OnInit, OnDestroy {
  loading!: boolean;
  projects?: project[];
  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) { 

  }

  subscribeQuery = new Promise( (resolve) => {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_PROJECTS
    })
    .valueChanges
    .subscribe(({ data: { projects }, loading }) => {
      this.loading = loading;
      this.projects = projects;
      resolve(projects); //test
    });
  });

  ngOnInit(): void {
    AppComponent.setTitle("My work");
    this.subscribeQuery.then(() => {
      //Call it a day
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
