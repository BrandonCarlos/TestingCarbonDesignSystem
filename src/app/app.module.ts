import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { IconService } from 'carbon-components-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Import icons of carbon design system
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
// import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';

// Carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// import { RouterModule, Routes } from '@angular/router';

// // const appRoutes: Routes = [
// //   { path: 'crisis-center', component: HeaderComponent },
// //   { path: 'brandonCarlos', component: LandingPageComponent }
// // ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    GraphQLModule,
    HttpClientModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // supposed have why declared icons here to using within of our application
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification20,
      UserAvatar20
    ]);
  }
}
