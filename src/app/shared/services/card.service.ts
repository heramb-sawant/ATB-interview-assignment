import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  cards: Card[] = [
    new Card('nvb3t7', 'sdsf32', '2131038472830293', 'Debit', 'Avengers First Account', 43523454),
    new Card('vdh454', 'sdsf32', '2735940018302643', 'Credit', 'Cash Rewards', 32445),
    new Card('fsdg45', 'sdsf32', '4836509818695049', 'Credit', 'Gold Rewards', 24524),
    new Card('jkf675', 'sdsf32', '2131038472830293', 'Credit', 'Bunch of Money', 345635),
    new Card('gg3gj5', 'd5g3d5', '2735940018302643', 'Debit', 'Avengers First Account', 23445),
    new Card('zgw564', 'd5g3d5', '4836509818695049', 'Credit', 'Gold Rewards', 324)
  ];

  // api call should be GET/api/users/{userId}/cards
  getCards(userId: string, params: {} = {}): Card[] {
    const paramKeys = Object.keys(params);
    return this.cards.filter(card => {
      let returnCard = false;
      paramKeys.forEach(param => {
        if (card[param] === params[param] && card.userId === userId) {
          returnCard = true;
        }
      });
      return returnCard ? true : false;
    });
  }

  // api call should be GET/api/users/{userId}/cards/{cardId}
  getCard(userId: string, cardId: string): Card {
    return this.cards.find(card => card.id === cardId && card.userId === userId);
  }
}
