import React, { Component } from 'react'
import Header from '../Header'
import {
  getAllCards,
  getCardsFromStorage,
  saveCardsToStorage,
} from '../services'
import Card from '../components/Card'

export default class Home extends Component {
  state = {
    cards: getCardsFromStorage(),
  }

  componentDidMount() {
    getAllCards().then(res => {
      this.setState({
        cards: res.data,
      })
    })
  }

  componentDidUpdate() {
    saveCardsToStorage(this.state.cards)
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.cards.map(card => (
          <Card
            key={card._id}
            title={card.title}
            content={card.content}
            tags={card.tags}
          />
        ))}
      </div>
    )
  }
}
