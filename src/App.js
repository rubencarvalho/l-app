import React, { Component } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom' // keine der Dateien ist default und werden exportiert von react-router-dom. werden ohne
import Home from './routes/Home'
import Create from './routes/Create'
import Bookmarks from './routes/Bookmarks'
import Settings from './routes/Settings'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  grid-gap: 2px;
  height: 100vh;
`

const Nav = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  .navItem {
    display: flex;
    cursor: default;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex: 1 1;
    background: ${p => (p.active ? 'hotpink' : '#ccc')};
    text-transform: uppercase;
    color: white;
    text-decoration: none;
  }
  .navItem--active {
    background: hotpink;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Route exact path="/" component={Home} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/create" component={Create} />
          <Route path="/settings" component={Settings} />
          <Nav>
            <NavLink
              className="navItem"
              exact
              to="/"
              activeClassName="navItem--active"
            >
              Home
            </NavLink>
            <NavLink
              className="navItem"
              to="/bookmarks"
              activeClassName="navItem--active"
            >
              Bookmarks
            </NavLink>
            <NavLink
              className="navItem"
              to="/create"
              activeClassName="navItem--active"
            >
              Create
            </NavLink>
            <NavLink
              className="navItem"
              to="/settings"
              activeClassName="navItem--active"
            >
              Settings
            </NavLink>
          </Nav>
          <GlobalStyle />
        </Grid>
      </Router>
    )
  }
}

export default App
