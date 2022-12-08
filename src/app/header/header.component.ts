import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Notification20 from '@carbon/icons/es/notification/20';
import Switcher20 from '@carbon/icons/es/switcher/20';
// import HdFilled from '@carbon/icons/es/HD--filled/32';

import { Component, OnInit, HostBinding } from '@angular/core';

// going register icons of carbon design system
import { IconService, IconModule } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  // De acordo com a documentação "cds--header" é uma class fornecida do carbon, e dará um padding do header
  @HostBinding('class.cds--header') headerClass = true;
  constructor(protected iconService: IconService) { }// dependencies's injection

  imports: [
    IconModule
  ];

  ngOnInit(): void {
    this.iconService.registerAll([Notification20, UserAvatar20, Switcher20]); // Here be register all icons of carbon design system
  }


}
