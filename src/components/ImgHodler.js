import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImgHodler = ({ queryString }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery2 {
          site {
            siteMetadata {
              title
            }
          }
          thumbParallel: file(relativePath: { eq: "thumb_parallel.png" }) {
            ...cardFluidImage
          }
          thumbPrecinct: file(relativePath: { eq: "thumb_precinct.png" }) {
            ...cardFluidImage
          }
          thumbAirportBar: file(relativePath: { eq: "thumb_airport_bar.png" }) {
            ...cardFluidImage
          }
          thumbAirportBubble: file(
            relativePath: { eq: "thumb_airport_bubble.png" }
          ) {
            ...cardFluidImage
          }
          thumbPower: file(relativePath: { eq: "thumb_power_law.png" }) {
            ...cardFluidImage
          }
          thumbCollege: file(relativePath: { eq: "thumb_college_majors.png" }) {
            ...cardFluidImage
          }
          thumbNeofj: file(relativePath: { eq: "thumb_neofj.png" }) {
            ...cardFluidImage
          }
        }
      `}
      render={data => {
        return (
          <Img
            key={data.site.siteMetadata.title}
            fluid={data[queryString].childImageSharp.fluid}
          />
        )
      }}
    />
  )
}

export default ImgHodler
