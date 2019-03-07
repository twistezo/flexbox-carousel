class Carousel {
  constructor(cards, selector) {
    this._cards = cards
    this._selector = selector
  }

  init = () => {
    const cardContainer = document.querySelector(this._selector)
    const prevArrow = document.querySelector('.carousel > .prev')
    const nextArrow = document.querySelector('.carousel > .next')
    prevArrow.onclick = this._handleLeft
    nextArrow.onclick = this._handleRight

    this._cards.forEach(card => {
      cardContainer.appendChild(card)
    })
    cardContainer.lastChild.classList.add('first')
    return this
  }

  rotateRightAfterTime = timeMs => {
    setInterval(() => {
      this._handleRotate('right')
    }, timeMs)
  }

  _handleLeft = () => {
    this._handleRotate('left')
  }

  _handleRight = () => {
    this._handleRotate('right')
  }

  _handleRotate = direction => {
    // remove class `first`
    let first = document.querySelector('.first')
    first.className = 'card'
    // move class `first` to previous/next element
    let newFirst =
      direction === 'right'
        ? this._nextElement(first, this._cards)
        : this._previousElement(first, this._cards)
    newFirst.className = 'card first'
    newFirst.style.order = 1
    // fill all next elements orders with bigger numbers
    for (let i = 2; i <= this._cards.length; i++) {
      newFirst = this._nextElement(newFirst, this._cards)
      newFirst.style.order = i
    }
  }

  // Returns in loop previous HTML element of elements array
  _previousElement = (current, array) =>
    current.previousSibling !== null
      ? current.previousSibling
      : array[array.length - 1]

  // Returns in loop next HTML element of elements array
  _nextElement = (current, array) =>
    current.nextSibling !== null ? current.nextSibling : array[0]
}

export default Carousel
