import Chance from 'chance'

class Card {
  constructor(title, body, imageSource) {
    this._title = title
    this._body = body
    this._imageSource = imageSource
  }

  static newRandomHtmlCard = index => {
    const chance = new Chance()
    return new Card(
      '#' + index + ' ' + chance.sentence({ words: randomBetween(1, 8) }),
      chance.sentence({ words: randomBetween(6, 26) }),
      `https://avatars.dicebear.com/v2/identicon/${chance.word()}.svg`
    ).toHtmlElement()
  }

  toHtmlElement = () => {
    const card = document.createElement('div')
    card.className = 'card'
    if (this._title !== undefined) {
      const title = document.createElement('h4')
      title.innerHTML += this._title
      card.appendChild(title)
    }
    if (this._body !== undefined) {
      const body = document.createElement('p')
      body.innerHTML += this._body
      card.appendChild(body)
    }
    if (this._imageSource !== undefined) {
      const image = document.createElement('img')
      image.alt = 'some image description'
      image.src = this._imageSource
      card.appendChild(image)
    }
    return card
  }
}

const randomBetween = (min, max) =>
  Math.round(Math.random() * (max - min) + min)

export default Card
