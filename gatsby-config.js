module.exports = {
  siteMetadata: {
    title: `evanghelic.ro`,
    welcome: 'Bine ati venit!'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark'
    }
  ]
};