import { NgModule } from '@angular/core';

//import icons of carbon
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import Application32Icon from '@carbon/icons/es/application/32';
import Globe32Icon from '@carbon/icons/es/globe/32';
import PersonFavorite32Icon from '@carbon/icons/es/person--favorite/32';
import { GridModule, IconService } from 'carbon-components-angular';

@NgModule({
  declarations: [InfoCardComponent, InfoSectionComponent],
  imports: [
    CommonModule,
    GridModule,
  ],
  exports: [InfoCardComponent, InfoSectionComponent]//hability to use within this scope
})
export class InfoModule {
  constructor(protected iconService: IconService) {//going registered icons of carbon design system
    iconService.registerAll([
        Application32Icon,
        Globe32Icon,
        PersonFavorite32Icon,
    ]);
}

}
