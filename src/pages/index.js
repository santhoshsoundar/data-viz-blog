import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Quote from '../components/home/Quote'
import Card from '../components/home/Card'
import Bio from '../components/home/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMdx.edges')
    let image_data = [
      {
        name: 'A Day with Shirley Wu',
        company: 'May, 2018',
        img: this.props.data.thumbShirley.childImageSharp.fluid,
        link: '/hello-world/',
        tweet: 'http://www.twitter.com',
        github: 'http://www.github.com',
      },
      {
        name: 'BayD3 meetup @Google: Semiotic.js',
        company: ' Jan, 2018',
        img: this.props.data.thumbSemiotic.childImageSharp.fluid,
        link: 'http://www.github.com',
      },
      {
        name: 'Kepler Map',
        company: 'August, 2018',
        img: this.props.data.thumbKepler.childImageSharp.fluid,
        link: '/hi-folks/',
        github: 'http://www.github.com',
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
        github: 'http://www.github.com',
        link: 'http://serene-temple-42286.herokuapp.com/',
        external: 'http://serene-temple-42286.herokuapp.com/',
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
        name: 'Exploring Visual Perception',
        company: '2015',
        img: this.props.data.thumbPower.childImageSharp.fluid,
      },
      {
        name: 'College Majors Outcome Analysis',
        company: '2015',
        img: this.props.data.thumbCollege.childImageSharp.fluid,
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
        <Bio />
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
    thumbShirley: file(relativePath: { eq: "thumb_shirley.png" }) {
      ...cardFluidImage
    }
    thumbSemiotic: file(relativePath: { eq: "thumb_semiotic.png" }) {
      ...cardFluidImage
    }
    thumbKepler: file(relativePath: { eq: "thumb_kepler.png" }) {
      ...cardFluidImage
    }
    thumbReusable: file(relativePath: { eq: "thumb_reusable.png" }) {
      ...cardFluidImage
    }
    thumbSf: file(relativePath: { eq: "thumb_sf_muni.png" }) {
      ...cardFluidImage
    }
    thumbMagneto: file(relativePath: { eq: "thumb_magneto.png" }) {
      ...cardFluidImage
    }
    thumbExp: file(relativePath: { eq: "thumb_exp_dashboard.png" }) {
      ...cardFluidImage
    }
    thumbFaces: file(relativePath: { eq: "thumb_faces.png" }) {
      ...cardFluidImage
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
    thumbPower: file(relativePath: { eq: "thumb_power_law.png" }) {
      ...cardFluidImage
    }
    thumbCollege: file(relativePath: { eq: "thumb_college_majors.png" }) {
      ...cardFluidImage
    }
  }
`
