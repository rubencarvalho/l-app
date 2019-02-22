import React, { Component } from 'react'
import styled from 'styled-components'
const StyledCard = styled.section`
  display: grid;
  grid-template-rows: 40px auto 40px;
  width: 300px;
  background-color: lightsalmon;
  border: 2px solid darkgrey;
  padding: 15px;
`
const StyledHeadline = styled.h3`
  font-family: sans-serif;
  font-size: 1.5rem;
`
const StyledParagraph = styled.p`
  font-family: sans-serif;
`

export default class Card extends Component {
  render() {
    const { title, content, tags } = this.props

    return (
      <StyledCard>
        <StyledHeadline>{title}</StyledHeadline>
        <StyledParagraph>{content}</StyledParagraph>
        <StyledParagraph>{tags}</StyledParagraph>
      </StyledCard>
    )
  }
}
