require("dotenv").config()

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["about", "service", "contact"],
  // singleTypes: [],
  // queryLimit: 1000,
}
module.exports = {
  siteMetadata: {
    title: `DreamBuildGarage.llc`,
    description: `DBG's official site. Keeping you up with the latest news, tunes, & services. Book your appointment today!`,
    author: `@luiscmartinez`,
    siteUrl: `https://dreambuildgarage.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DreamBuildGarage`,
        short_name: `DBG`,
        start_url: `/`,
        background_color: `#663399`,
        description: `DBG's official site. Keeping you up with the latest news, tunes, & services. Book your appointment today!`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/assets/dbg_logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carouselImages`,
        path: `${__dirname}/src/images/carousel/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galleryImages`,
        path: `${__dirname}/src/images/gallery/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assetImages`,
        path: `${__dirname}/src/images/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
