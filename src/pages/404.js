import React, { Component } from 'react'
import { graphql } from 'gatsby'

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}

export default NotFoundPage