import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PostHeader from '../components/blog/PostHeader'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostHeader postdate={post.frontmatter.date} />
        <h1>{post.frontmatter.title}</h1>
        <div>
          <MDXRenderer scope={this.props.__mdxScope}>
            {post.code.body}
          </MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
