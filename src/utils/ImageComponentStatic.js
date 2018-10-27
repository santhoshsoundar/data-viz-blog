import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
        thumbShirley: file(relativePath: { eq: "thumb_shirley.png" }) {
          ...cardFluidImage
        }
        thumbSemiotic: file(relativePath: { eq: "thumb_semiotic.png" }) {
          ...cardFluidImage
        }
        thumbKepler: file(relativePath: { eq: "thumb_kepler.png" }) {
          ...cardFluidImage
        }
      }
    `}
    render={data => (
      <Img
        key={data.site.siteMetadata.title}
        fluid={data.thumbKepler.childImageSharp.fluid}
      />
    )}
  />
)
