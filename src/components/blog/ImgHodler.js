import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImgHodler = ({ queryString, widthProp, displayProp, label, mlProp }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery2 {
          site {
            siteMetadata {
              title
            }
          }
          postBayd3Pass: file(relativePath: { eq: "bayd3Pass.png" }) {
            ...cardFluidImage
          }
          postUberPass: file(relativePath: { eq: "uberPass.png" }) {
            ...cardFluidImage
          }
          postGoogleCampus: file(relativePath: { eq: "googleCampus.png" }) {
            ...cardFluidImage
          }
          postCritique: file(relativePath: { eq: "critique.png" }) {
            ...cardFluidImage
          }
          postParallelHead: file(relativePath: { eq: "head.png" }) {
            ...cardFluidImage
          }
          postParallel1: file(relativePath: { eq: "p1.png" }) {
            ...cardFluidImage
          }
          postParallel2: file(relativePath: { eq: "p2.png" }) {
            ...cardFluidImage
          }
          postParallel3: file(relativePath: { eq: "p3.png" }) {
            ...cardFluidImage
          }
          postParallel4: file(relativePath: { eq: "p4.png" }) {
            ...cardFluidImage
          }
        }
      `}
      render={data => {
        return (
          <span
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: '11px',
              display: (displayProp) ? displayProp : {},
              marginLeft: (mlProp) ? mlProp : {}
            }}>
            <Img
              style={{
                width: (widthProp) ? widthProp : {},
                margin: 'auto'
              }}
              key={data.site.siteMetadata.title}
              fluid={data[queryString].childImageSharp.fluid}
            />
            {label && <p style={{ marginTop: '5px' }}>{label}</p>}
          </span>

        )
      }}
    />
  )
}

export default ImgHodler
