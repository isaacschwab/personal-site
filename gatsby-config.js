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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-inline-svg`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
