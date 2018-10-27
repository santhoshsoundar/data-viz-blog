import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

class NotFoundPage extends Component {
  render() {
    let image = this.props.data.thumbShirleyF.childImageSharp.fluid
    return (
      <div>
        <h1>NOT FOUND</h1>
        <Img fluid={image} style={{ height: 480, width: 640 }} />
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    thumbShirleyF: file(relativePath: { eq: "thumb_shirley.png" }) {
      ...cardFluidImage
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
