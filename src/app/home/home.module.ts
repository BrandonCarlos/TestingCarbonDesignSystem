import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // important to can using directives and other tools of angular, the core

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GridModule, BreadcrumbModule, ButtonModule, TabsModule } from 'carbon-components-angular';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    [GridModule], // to using within of our application
    BreadcrumbModule, // component of carbon
    ButtonModule,
    TabsModule,
  ]
})
export class HomeModule { }
