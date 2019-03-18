import { Component, OnInit, Input } from '@angular/core';

import { Card } from "../../../../shared/models/card.model";

@Component({
  selector: 'app-summary-list-item',
  templateUrl: './summary-list-item.component.html',
  styleUrls: ['./summary-list-item.component.css']
})
export class SummaryListItemComponent implements OnInit {
  @Input('card') card: Card;
  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
