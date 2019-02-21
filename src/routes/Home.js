import React, { Component } from 'react'
import Header from '../Header'
import Filter from '../Filter'

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
        <Header>
          {this.state.activeTag}
          <Filter
            items={this.state.tags}
            active={this.state.activeTag}
            onClick={this.setFilter}
          />
        </Header>
      </div>
    )
  }
}
