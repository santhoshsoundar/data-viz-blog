import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    let header = (
      <pre
        style={{
          fontFamily: 'PT Sans, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        {post.frontmatter.date} /
        <Link
          style={{
            fontFamily: 'PT Sans, sans-serif',
          }}
          to={'/'}
          aria-label="home"
        >
          {' '}
          Santhosh Soundararajan
        </Link>
      </pre>
    )

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        {header}
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <hr
          style={{
            marginBottom: '2px',
          }}
        />
         <h5
          style={{
            textAlign: 'center',
            marginTop: rhythm(0.5),
            marginBottom: rhythm(1),
          }}
        >
          {' '}
          ~ Happy Hacking ~{' '}
        </h5> 
        <Bio />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       sizes(maxWidth: 800) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
