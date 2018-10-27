module.exports = {
  siteMetadata: {
    title: 'Data Viz Blog',
    author: 'Santhosh Soundararajan',
    description:
      'An over engineered Data Viz Blog in conjunction with Gatsby+MDX+React+GraphQL',
    siteUrl: 'http://santhoshfiddle.com',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        root: __dirname,
        extensions: ['.md', '.mdx'],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            pluginOptions: {
              maxWidth: 590,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-brotli',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Data Viz Blog`,
        short_name: `DataVizBlog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/components/assets/favico.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/card-img`,
        name: 'cardImages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/post-img`,
        name: 'postImages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/post-img/parallel`,
        name: 'postParallel',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/post-img/power-law`,
        name: 'postPower',
      },
    },
  ],
}
