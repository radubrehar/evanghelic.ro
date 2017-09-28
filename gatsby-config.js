module.exports = {
  siteMetadata: {
    title: `Biserica Cluj - Biserica Creștină după Evanghelie`,
    welcome: 'Bine ați venit!'
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
