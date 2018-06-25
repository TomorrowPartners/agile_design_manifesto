module.exports = {
  siteMetadata: {
    title: 'Manifesto for Agile Design and Development',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
       `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages",
      },
    },


    `gatsby-transformer-remark`,


],
}
