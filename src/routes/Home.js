import React, { Component } from 'react'
import Header from '../Header'

export default class Home extends Component {
  state = {
    tags: ['html', 'css', 'js', 'shell'],
    activeTag: 'html',
  }

  setFilter = tag => {
    this.setState({
      activeTag: tag,
    })
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
