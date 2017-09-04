module.exports = {
  siteMetadata: {
    title: `evanghelic.ro`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    }
  ]
};
