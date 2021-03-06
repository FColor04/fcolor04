import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './hero/hero.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { BackgroundPatternComponent } from './background-pattern/background-pattern.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundPatternComponent,
    ProjectCardComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    Title,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api-eu-central-1.graphcms.com/v2/ckqq9a1bhikv501wa7dv828xh/master',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
