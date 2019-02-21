import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.section`
  display: grid;
  font-size: 44px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 'bold';
  padding: 40px;
  color: rgba(83, 42, 172);
  background-image: linear-gradient(-90deg, #481f59, #1e2059);
`

export default class Header extends Component {
  render() {
    const { children } = this.props
    return <StyledHeader>{children}</StyledHeader>
  }
}
