import React, { Component } from 'react'
import styled from 'styled-components'
import { postNewCard } from '../services'
const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 48px 48px 80px 48px;
  gap: 10px;
  color: black;
`

export default class Create extends Component {
  state = {
    title: '',
    content: '',
    tags: '',
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const tagList = this.state.tags.split(',').map(tag => tag.trim())
    postNewCard({ ...this.state, tags: tagList }).then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <React.Fragment>
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            onChange={this.onInputChange}
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            onChange={this.onInputChange}
            placeholder="Content"
            name="content"
            id=""
            cols="30"
            rows="10"
          />
          <input
            onChange={this.onInputChange}
            placeholder="tags"
            type="text"
            name="tags"
          />
          <button>Create</button>
        </StyledForm>
      </React.Fragment>
    )
  }
}
