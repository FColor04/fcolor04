import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';
import gsap, { SteppedEase } from 'gsap';

const GET_HERO = gql`
  query GetHero {
    heroes(first: 1){
      hooks
      image {
        url
      }
    }
  }
`;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  loading!: boolean;
  hero!: any;
  currentHook: string = "";
  currentImage: string = "";
  tl = gsap.timeline();

  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) { }

  createTypewriterAnim(){
    this.hero.hooks.forEach((hook : string) => {
      this.tl
      .call(() => {
        const hookHtml = document.querySelector(".anim-typewriter");
        if(hookHtml)
          hookHtml.innerHTML = hook;
      }, undefined, ">1")
      .fromTo(".anim-typewriter", {width: "0"}, {width: `${hook.length}ch`, duration: "0.7", ease: `steps(${hook.length})`}, ">")
      .set(".anim-typewriter", {backgroundColor: "rgba(0,0,255, 0.5)"}, ">2.6")
      .set(".anim-typewriter", {width: "0", backgroundColor: "transparent"}, ">0.4");
    });
    this.tl.repeat(-1).repeatDelay(2);
  }

  subscribeQuery = new Promise( (resolve) => {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_HERO
    })
    .valueChanges
    .subscribe(({ data: { heroes }, loading }) => {
      this.loading = loading;
      this.hero = heroes[0];
      resolve(this.hero);
    });
  });

  ngOnInit(): void {
    this.subscribeQuery.then(() => {
      this.createTypewriterAnim();
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
