import { Component, OnInit } from '@angular/core';
import * as data from '../info.json';//go add content here of info.json
import {} from './info-section.component.spec';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})

export class InfoSectionComponent implements OnInit {
  heading = data.title;//one property
  items = data.items;//array

  constructor() { }

  ngOnInit(): void {
  }

}
