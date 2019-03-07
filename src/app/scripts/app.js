import Card from './card'
import Carousel from './carousel'

import '../styles/_layout.scss'
import '../images/logo.svg'
import '../images/favicon.png'

class App {
  constructor() {
    this._sectionOneCards = this._generateRandomHtmlCards(8)
    this._sectionTwoCards = this._generateRandomHtmlCards(3)
  }

  run() {
    new Carousel(this._sectionOneCards, '.section-one .card-container', 3)
      .init()
      .rotateRightAfterTime(1500)
    this._appendCardsTo(this._sectionTwoCards, '.section-two .card-container')
  }

  _appendCardsTo = (cards, selector) => {
    const cardContainer = document.querySelector(selector)
    cards.forEach(card => {
      cardContainer.appendChild(card)
    })
  }

  _generateRandomHtmlCards = quantity => {
    let cards = []
    for (let i = 0; i < quantity; i++) {
      cards.push(Card.newRandomHtmlCard(i))
    }
    return cards
  }
}

export default App
