import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  cards: Card[] = [
    new Card('nvb3t7', 'sdsf32', '2131038472830293', 'Debit', 'Avengers First Account'),
    new Card('vdh454', 'sdsf32', '2735940018302643', 'Credit', 'Cash Rewards'),
    new Card('fsdg45', 'sdsf32', '4836509818695049', 'Credit', 'Gold Rewards'),
    new Card('jkf675', 'sdsf32', '2131038472830293', 'Credit', 'Bunch of Money'),
    new Card('gg3gj5', 'd5g3d5', '2735940018302643', 'Debit', 'Avengers First Account'),
    new Card('zgw564', 'd5g3d5', '4836509818695049', 'Credit', 'Gold Rewards')
  ]

  // api call should be GET/api/users/{userId}/cards
  getCards(userId: string): Card[] {
    return this.cards.filter(card => card.userId === userId);
  }

  // api call should be GET/api/users/{userId}/cards/{cardId}
  getCard(userId: string, cardId: string): Card  {
    console.log(cardId)
    return this.cards.find(card => card.id === cardId && card.userId === userId);
  }
}
