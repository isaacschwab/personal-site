/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Isaac Schwab`,
    description: `Developer | Software Engineer | Fullstack Engineer`,
    author: `@DevSchwab`,
    social: {
      github: `https://github.com/isaacschwab`,
      instagram: `https://www.instagram.com/ischwab16/`,
    },
  },
  plugins: [
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      additionalData: `@use "${__dirname}/src/global-styles/vars.scss" as *;`,
      sassOptions: {
        includePaths: [
          'src/components/',
          'src/templates/'
        ]
      }
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `./src/images`,
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data`,
    },
    __key: "data"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `schwab-personal-site`,
      short_name: `schwab`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/is-icon.png`, // This path is relative to the root of the site.
    },
  },
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-transformer-json",
  "gatsby-transformer-inline-svg",
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }
]
};