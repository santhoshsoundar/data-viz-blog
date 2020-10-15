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
        name: 'Exoplanet - React Chart Components (Hooks)',
        month: 'September, 2020',
        img: this.props.data.thumbExoplanet.childImageSharp.fluid,
        link: 'https://tender-euler-741952.netlify.app/',
        external: 'https://tender-euler-741952.netlify.app/',
        github: 'https://github.com/santhoshsoundar/exoplanet-dashboard',
        type: 'external',
      },
      {
        name: 'Alternative Hierarchical Visual Model',
        month: 'March, 2020',
        img: this.props.data.thumbTree.childImageSharp.fluid,
        link: 'https://elated-brattain-2ed5f2.netlify.com/',
        external: 'https://elated-brattain-2ed5f2.netlify.com/',
        github: 'https://github.com/santhoshsoundar/hierarchical-visual-models',
        type: 'external',
      },
      {
        name: 'Roll Rates Analysis Dashboard',
        month: 'May, 2020',
        img: this.props.data.thumbLoanpal.childImageSharp.fluid,
        link: 'https://reverent-aryabhata-c3e3ef.netlify.app/',
        external: 'https://reverent-aryabhata-c3e3ef.netlify.app/',
        github: 'https://github.com/santhoshsoundar/roll-rates-analysis',
        type: 'external',
      },
      {
        name: 'Building Custom Visualizations with Shirley Wu',
        month: 'August, 2018',
        img: this.props.data.thumbShirley.childImageSharp.fluid,
        link: '/custom-viz/',
        tweet: 'https://twitter.com/Santhosh7114/status/1025276134546534400',
        type: 'local',
      },
      {
        name: 'BayD3 Meetup @Google',
        month: ' July, 2018',
        img: this.props.data.thumbGoogle.childImageSharp.fluid,
        link: '/bayd3-meetup/',
        tweet: 'https://twitter.com/Elijah_Meeks/status/1019700407231176705',
        sandbox: 'https://codesandbox.io/s/z650jv812x',
        type: 'local',
      },
      {
        name: 'Exploring Visual Perception: Power Law',
        month: 'May 2018',
        img: this.props.data.thumbPower.childImageSharp.fluid,
        link: '/power-law/',
        type: 'local',
      },
      {
        name: 'Live Map of San Francisco Muni Buses',
        month: 'October 2017',
        img: this.props.data.thumbSf.childImageSharp.fluid,
        github: 'https://github.com/Santhosh114/SFO-transit-mapViz',
        link: 'http://serene-temple-42286.herokuapp.com/',
        external: 'http://serene-temple-42286.herokuapp.com/',
        type: 'external',
      },
      {
        name: 'Equinix Data Viz Challenge - DC.js',
        month: 'September 2017',
        img: this.props.data.thumbMagneto.childImageSharp.fluid,
        link: 'http://www.santhoshfiddle.com/equinixChallenge.html',
        external: 'http://www.santhoshfiddle.com/equinixChallenge.html',
        type: 'external',
      },
      {
        name: 'Expenditure Dashboard with Critique',
        month: 'August 2017',
        img: this.props.data.thumbExp.childImageSharp.fluid,
        link: 'http://www.santhoshfiddle.com/expdashboard.html',
        external: 'http://www.santhoshfiddle.com/expdashboard.html',
        type: 'external',
      },
      {
        name: 'Chernoff Faces',
        month: 'August 2016',
        img: this.props.data.thumbFaces.childImageSharp.fluid,
        link: 'http://www.santhoshfiddle.com/chernoff.html',
        external: 'http://www.santhoshfiddle.com/chernoff.html',
        type: 'external',
      },
      {
        name: 'Birth of Parallel Co-ordinates',
        month: 'July 2016',
        img: this.props.data.thumbParallel.childImageSharp.fluid,
        link: '/parallel-coordinates/',
        type: 'local',
      },
      {
        name: 'Critique of Precinct Level Map',
        month: 'September 2015',
        img: this.props.data.thumbPrecinct.childImageSharp.fluid,
        link: '/precinct-critique/',
        type: 'local',
      },
      {
        name: 'Airport Evolution - Temporal Viz with Animation',
        month: 'November 2015',
        img: this.props.data.thumbAirportBar.childImageSharp.fluid,
        link: 'http://www.santhoshfiddle.com/airport.html',
        external: 'http://www.santhoshfiddle.com/airport.html',
        type: 'external',
      },
      {
        name: 'College Majors Outcome Analysis - IULab',
        month: 'October 2015',
        img: this.props.data.thumbCollege.childImageSharp.fluid,
        link: 'http://www.santhoshfiddle.com/collegemajors.html',
        external: 'http://www.santhoshfiddle.com/collegemajors.html',
        type: 'external',
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
        <Bio />
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
    thumbLoanpal: file(relativePath: { eq: "thumb_loanpal_rr.png" }) {
      ...cardFluidImage
    }
    thumbTree: file(relativePath: { eq: "thumb_tree_model.png" }) {
      ...cardFluidImage
    }
    thumbShirley: file(relativePath: { eq: "thumb_shirley.png" }) {
      ...cardFluidImage
    }
    thumbGoogle: file(relativePath: { eq: "thumb_bayd3Google.png" }) {
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
    thumbExoplanet: file(relativePath: { eq: "thumb_exoplanet.png" }) {
      ...cardFluidImage
    }
  }
`

// Upcoming posts

// {
//   name: 'Kepler Map',
//   month: 'August, 2018',
//   img: this.props.data.thumbKepler.childImageSharp.fluid,
//   link: '/hi-folks/',
//   github: 'http://www.github.com',
//   type: 'local'
// },

// thumbKepler: file(relativePath: { eq: "thumb_kepler.png" }) {
//   ...cardFluidImage
// }

// {
//   name: 'Reusable Module In Action',
//   month: '2018',
//   img: this.props.data.thumbReusable.childImageSharp.fluid,
//   type: 'local'
// },

// thumbReusable: file(relativePath: { eq: "thumb_reusable.png" }) {
//   ...cardFluidImage
// }
