import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Quote from '../components/Quote'
import Card from '../components/Card'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMdx.edges')
    let image_data = [
      {
        name: 'A Day with Shirley Wu',
        company: '2018',
        img: this.props.data.thumbShirley.childImageSharp.fluid,
        link: '/hello-world/',
      },
      {
        name: 'BayD3 meetup @Google: Semiotic.js',
        company: '2018',
        img: this.props.data.thumbSemiotic.childImageSharp.fluid,
      },
      {
        name: 'Kepler Map',
        company: '2018',
        img: this.props.data.thumbKepler.childImageSharp.fluid,
      },
      {
        name: 'Reusable Module In Action',
        company: '2018',
        img: this.props.data.thumbReusable.childImageSharp.fluid,
      },

      {
        name: 'Live Map of SFMuni Bus Service',
        company: '2017',
        img: this.props.data.thumbSf.childImageSharp.fluid,
      },
      {
        name: 'Dashboard with Crossfilter & DC',
        company: '2017',
        img: this.props.data.thumbMagneto.childImageSharp.fluid,
      },
      {
        name: 'Critique of Expenditure Dashboard',
        company: '2017',
        img: this.props.data.thumbExp.childImageSharp.fluid,
      },
      {
        name: 'Chernoff Faces',
        company: '2016',
        img: this.props.data.thumbFaces.childImageSharp.fluid,
      },
      {
        name: 'Birth of Parallel Co-ordinates',
        company: '2016',
        img: this.props.data.thumbParallel.childImageSharp.fluid,
      },
      {
        name: 'Critique of Precinct Level Map',
        company: '2016',
        img: this.props.data.thumbPrecinct.childImageSharp.fluid,
      },
      {
        name: 'Airport Evolution - Temporal Viz with Animation',
        company: '2015',
        img: this.props.data.thumbAirportBar.childImageSharp.fluid,
      },
      {
        name: 'Bubble version of Airport Evolution',
        company: '2015',
        img: this.props.data.thumbAirportBubble.childImageSharp.fluid,
      },
      {
        name: 'Exploring Visual Perception',
        company: '2015',
        img: this.props.data.thumbPower.childImageSharp.fluid,
      },
      {
        name: 'College Majors Outcome Analysis',
        company: '2015',
        img: this.props.data.thumbCollege.childImageSharp.fluid,
      },
      {
        name: 'Neo4j Friends Map',
        company: '2015',
        img: this.props.data.thumbNeofj.childImageSharp.fluid,
      },
    ]

    return (
      <Layout location={this.props.location}>
        <noscript>
          <a href="https://www.mozilla.com/">External Link</a>
        </noscript>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: 'DavaViz Blog' },
            { name: 'keywords', content: 'D3.js DataViz' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Card image_info={image_data} />
        <Quote />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    thumbShirley: file(relativePath: { eq: "thumb_shirley.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbSemiotic: file(relativePath: { eq: "thumb_semiotic.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbKepler: file(relativePath: { eq: "thumb_kepler.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbReusable: file(relativePath: { eq: "thumb_reusable.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbSf: file(relativePath: { eq: "thumb_sf_muni.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbMagneto: file(relativePath: { eq: "thumb_magneto.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbExp: file(relativePath: { eq: "thumb_exp_dashboard.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbFaces: file(relativePath: { eq: "thumb_faces.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbParallel: file(relativePath: { eq: "thumb_parallel.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbPrecinct: file(relativePath: { eq: "thumb_precinct.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbAirportBar: file(relativePath: { eq: "thumb_airport_bar.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbAirportBubble: file(
      relativePath: { eq: "thumb_airport_bubble.webp" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbPower: file(relativePath: { eq: "thumb_power_law.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbCollege: file(relativePath: { eq: "thumb_college_majors.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbNeofj: file(relativePath: { eq: "thumb_neofj.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
