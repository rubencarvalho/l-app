import React, { Component } from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
`

const Link = styled.div`
  display: flex;
  cursor: default;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1 1;
  background: ${p => (p.active ? 'rgba(83, 42, 172, 0.27)' : 'transparent')};
  text-transform: uppercase;
  color: white;
  border: 1px solid black;
`

export default class Filter extends Component {
  render() {
    const { items, active, onClick } = this.props
    return (
      <Grid>
        {items.map(item => (
          <Link
            key={item}
            active={item === active}
            onClick={() => onClick(item)}
          >
            {item}
          </Link>
        ))}
      </Grid>
    )
  }
}
