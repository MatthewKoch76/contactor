import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    console.log('bang')
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }))
  }

  render() {
    const { title, body } = this.state
    return (
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test