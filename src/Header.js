import React, { Component } from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const StyledHeader = styled.header`
  display: grid;
  font-size: 44px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 'bold';
  padding: 40px;
  color: black;
  background-image: linear-gradient(180deg, #c19b76, white);

  .title {
    margin-bottom: 20px;
  }
`

export default class Header extends Component {
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
      <StyledHeader>
        <div className="title">{this.state.activeTag}</div>
        <Filter
          items={this.state.tags}
          active={this.state.activeTag}
          onClick={this.setFilter}
        />
      </StyledHeader>
    )
  }
}
