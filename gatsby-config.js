module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/content/blog`,
    },
  },
  `gatsby-transformer-remark`,]
}