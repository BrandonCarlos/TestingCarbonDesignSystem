import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() heading;//have input of heading and content there of info.json
  @Input() content;
  splitHeading;

  constructor() { }

  ngOnInit(): void {
    this.splitHeading = this.createArrayFromPhrase(this.heading);
  }

  createArrayFromPhrase(phrase) {
    const splitPhrase = phrase.split(" ");
    const thirdWord = splitPhrase.pop();
    return [splitPhrase.join(" "), thirdWord];//[ l e g a l ]
  }
}
