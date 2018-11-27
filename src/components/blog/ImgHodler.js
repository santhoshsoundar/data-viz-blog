import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImgHodler = (props) => {
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
          postViolin: file(relativePath: { eq: "violin.png" }) {
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
          postPowerLaw: file(relativePath: { eq: "stevens.png" }) {
            ...cardFluidImage
          }
          postPL1: file(relativePath: { eq: "pl1.png" }) {
            ...cardFluidImage
          }
          postPL2: file(relativePath: { eq: "pl2.png" }) {
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
              display: (props.displayProp) ? props.displayProp : {},
              marginLeft: (props.mlProp) ? props.mlProp : {}
            }}>
            <Img
              style={{
                width: (props.fixWidth) ? props.fixWidth : {},
                maxWidth: (props.widthProp) ? props.widthProp : {},
                margin: 'auto',
                marginBottom: (props.label) ? {} : '15px'
              }}
              key={data.site.siteMetadata.title}
              fluid={data[props.queryString].childImageSharp.fluid}
            />
            {props.label && <p style={{ marginTop: '5px' }}>{props.label} {props.link && <a href={props.link[1]}>{props.link[0]}</a>} </p>}

          </span>

        )
      }}
    />
  )
}

export default ImgHodler